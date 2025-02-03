import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import baby from "../../assets/Rectangle 40.png";
const Header = () => {
  return (
    <header className="hero position-relative">
      <img className="position-relative" src={baby} alt="" />
      <div className="h-text position-absolute d-flex flex-column align-items-start">
        <div className="t-head d-flex flex-column gap-3">
          <h1 className="m-0">Play, learn, & grow!</h1>
          <p className="m-0 pe-5">
            Crafting smiles with every toy, made for learning, fun, and growth
          </p>
        </div>
        <Link to="/shop" className="text-decoration-none">
          Shop now{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
