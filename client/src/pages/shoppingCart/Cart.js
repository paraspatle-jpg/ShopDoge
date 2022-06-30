import React from "react";
import {CartProducts} from "../../components/cartProducts/CartProducts"
import "./Cart.css"

const Cart = () => {
  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-flex-container">
        <CartProducts />
      </div>
    </div>
  );
};
export default Cart;
