const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_T291vJx5Y5h6jynuAOVbGQNA00y2U3YyE3');

//--API

//--APP CONFIG
const app = express();

//--MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//--API ROUTES
app.get('/', (request, response) => response.status(200).send('hello word'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request recieved BOOM! >>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  //OK-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//--LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/e-clone-ad8a2/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
