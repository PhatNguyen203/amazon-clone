import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
