import React, { useEffect }from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout'
import Payment from './components/payment/Payment'
import Login from './components/login/Login';
import Orders from './components/orders/Orders';
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_PbrIfS5P7hU6sBXerioDYpAl00Rsm9HrK8')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
