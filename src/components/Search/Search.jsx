import React from "react";
import "./Search.css";
import navcart from "../../assets/Group 29.png";
import Searchcart from "../../assets/Frame 72 (1).png";
const Search = () => {
  return (
    <div className="d-flex align-items-center gap-5">
      <img src={navcart} alt="" />
      <div className="position-relative">
        <input className="navinput" type="text" placeholder="search" />
        <img className="position-absolute end-0" src={Searchcart} alt="" />
      </div>
    </div>
  );
};

export default Search;
