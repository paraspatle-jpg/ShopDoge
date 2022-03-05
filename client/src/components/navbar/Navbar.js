import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import "./Navbar.css";

export const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [window.innerWidth]);

  return (
    <div className="navbar-container">
      <h1>
        Sh<p>o</p>pD<p>o</p>ge
      </h1>
      <SearchBar />
      <div className="hidden-toggle">
        <span onClick={() => settoggle(!toggle)}>Toggle</span>
      </div>
      <div
        className="side-nav"
        style={!toggle && width <= 1116 ? { height:'0', opacity: "0" } : { height:'100%', opacity: "1" }}
      >
        <ul>
          <h1>ShopDoge</h1>
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="navbar-links">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-links">
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-links">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="navbar-links">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
