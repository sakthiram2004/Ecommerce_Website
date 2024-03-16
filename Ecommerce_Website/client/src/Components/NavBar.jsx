import React from "react";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";

import { MdAccountCircle } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__leftside">
        <Link to="/">
          <h1 className="navbar__leftside__logo">ECOMMERCE</h1>
        </Link>
      </div>
      <div className="navbar__rightside">
        <div className="navbar__rightside__searchbar">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search Products or Brands"
          />
          <label htmlFor="search">
            <CiSearch className="navbar__rightside__searchbar__searchicon" />
          </label>
        </div>
        <div className="navbar__rightside__navlinks">
          <Link to="/savedlist">
            <IoHeartOutline className="navbar__rightside__navlinks__icons shavedlist " />
          </Link>
          <Link to="/cart">
            <TiShoppingCart className="navbar__rightside__navlinks__icons cart " />
          </Link>
          <Link to="/login">
            <MdAccountCircle className="navbar__rightside__navlinks__icons account " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
