import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault(); //prevent from refreshing while entring password
    //next doing some firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //next doing some firebase login
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    //put image here
    <div className="login">
      <Link to="/">
        <div class="cropped-image">WELCOME</div>
      </Link>

      <div class="form">
        <p></p>
        <form class="login-form">
          <input
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder=" Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signin} className="login_signinbutton">
            login
          </button>
        </form>
        <div class="p1">
          <p>
            By continuing, you agree to MegaSite's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <button on onClick={register} className="login__registerbutton">
          <p> Do not have an ID? Create yours now</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
