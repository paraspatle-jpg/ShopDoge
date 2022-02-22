import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [hideResults, setHideResults] = useState({ display: "none" });
  const [searchKey, setSearchKey] = useState("")
  const handleChange = (e) => {

    setSearchKey(e.target.value);
    if(e.target.value!==""){
      setHideResults({display: ""});
    }
    else{
      setHideResults({display: "none"});
    }
    console.log(e.target.value);
  }
  return (
    <div className="navbar">
      <h1>
        Sh<p>o</p>pD<p>o</p>ge
      </h1>
      <div className="navbar-input">
        <input
          type="text"
          className="nav-input"
          value={searchKey}
          placeholder="Search"
          onChange ={handleChange}
          onBlur={()=>setHideResults({display: "none"})}
        ></input>
        <div className="search-results" style={hideResults}>
          <div>{searchKey}</div>
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
          <Link to="/" className="navbar-links">
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
};
