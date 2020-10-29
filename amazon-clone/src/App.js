import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Hh6RVLM09v9FY07NIMMcixJNF59Etgrt3q2eABvLeQHnBIpOVlfqeycqV2aMvl3kJNetcoNF3S2ftN4ioNjzZCs00bSD7UuaP')
function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(()=>{
    //will only run once when the app component loads.....
    auth.onAuthStateChanged(authUser => {
      console.log("user is: ",authUser)
      if(authUser){
        //the user just logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //user is logout
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
