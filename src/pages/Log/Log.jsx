import React from "react";
import "./Log.css";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div className="sign-in">
      <form className="in-form" action="">
        <h1 className="in-title">login</h1>
        <div className="in-input">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Create an account</button>
        </div>
        <div className="dont">
          <p className="m-0">already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Log;
