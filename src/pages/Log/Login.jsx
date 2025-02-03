import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signin">
      <form className="in-form" action="">
        <h1 className="in-title">Login</h1>
        <div className="in-input">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button>Login Account</button>
        </div>

        <div className="dont">
          <p className="m-0">Trouble signing in?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
