import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBD0BSlwa10rasMMgeIdjIJqWgiudCefQA",
  authDomain: "e-clone-ad8a2.firebaseapp.com",
  databaseURL: "https://e-clone-ad8a2.firebaseio.com",
  projectId: "e-clone-ad8a2",
  storageBucket: "e-clone-ad8a2.appspot.com",
  messagingSenderId: "759548304718",
  appId: "1:759548304718:web:06110416509b98866c121f",
  measurementId: "G-J5M506Z0G7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };