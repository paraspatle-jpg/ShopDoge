import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {

  return (
    <div className="navbar">
        <h1>Sh<p>o</p>pD<p>o</p>ge</h1>
        <ul>
            <li><Link to="/" className="navbar-links" >Home</Link></li>
            <li><Link to="/products"className="navbar-links">Products</Link></li>
            <li><Link to="/cart" className="navbar-links">Shopping Cart</Link></li>
            <li><Link to="/" className="navbar-links">Login</Link></li>
            <li><Link to="/" className="navbar-links">SignUp</Link></li>
        </ul>
    </div>
  )
}
