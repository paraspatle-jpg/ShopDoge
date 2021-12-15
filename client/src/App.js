import React from "react";
import { Navbars } from "./components/navbar/Navbar"
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Cart from "./pages/shoppingCart/Cart";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
