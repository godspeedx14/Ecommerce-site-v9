import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
const promise = loadStripe(
  "pk_test_51LzlRHSG4XiKlWd70oCRedGGGeyorP8f9z4aFhd3bGWtunXnSPmj7urUNyBoPZGf2XO66ErTz6T9IeC5fjG5ekc800HUZKb6K2"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in/ the user was logged in before refresh
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
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/login" element={[<Header />, <Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
