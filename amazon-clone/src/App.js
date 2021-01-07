import React, { useEffect } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';
import {auth} from './Firebase';
import Orders from "./Components/Orders/Orders";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51I6bqXI4vhrFiG8jH1qRoNAnVjwYqEJfSGZYIVqySdAKuBG0pVWEZNCSudkmppvKkSJMIWazAKCKDQloKwFOxG8o00jusLgdSD"
);


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
      
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path ="/checkout" >
              <Header/>            
              <CheckOut />
           </Route>
          <Route path ="/login" >            
              <Login/>
           </Route>
          <Route path ="/" >
              <Header/>
              <Home/>
           </Route>         
       </Switch>  
    </div>
   </Router>
  );
}

export default App;
