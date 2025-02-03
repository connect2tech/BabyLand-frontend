import React from "react";
import { Link, Outlet } from "react-router-dom";
import authlogo from "../assets/image 2.png";

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">
        <img className="mt-5" src={authlogo} alt="" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
