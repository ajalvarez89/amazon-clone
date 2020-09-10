import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout/>
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
