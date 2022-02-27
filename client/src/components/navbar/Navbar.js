import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [hideResults, setHideResults] = useState({ display: "none" });
  const [searchKey, setSearchKey] = useState("");
  const dummyresults = [
    "paras",
    "tanmayee",
    "parul",
    "tanmay",
    "pallavi",
    "hem",
    "swapnil",
  ];
  const handleChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value !== "") {
      setHideResults({ display: "" });
    } else {
      setHideResults({ display: "none" });
    }
    console.log(e.target.value);
  };
  return (
    <div className="navbar">
      <h1>
        Sh<p data-aos="fade-up">o</p>pD<p data-aos="fade-down">o</p>ge
      </h1>
      <div className="navbar-input">
        <input
          type="text"
          className="nav-input"
          value={searchKey}
          placeholder="Search"
          onChange={handleChange}
        />
        <div
          className="search-results"
          onBlur={() => setHideResults({ display: "none" })}
          style={hideResults}
        >
          {dummyresults.map((dummy) => {
            if (dummy.search(searchKey) !== -1) {
              return (
                <Link
                  to="/products"
                  onClick={() => {
                    setSearchKey(dummy)
                    setHideResults({ display: "none" });
                  }}>
                  {dummy}
                  <br />
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <ul>
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
          <Link to="/" className="navbar-links">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};
