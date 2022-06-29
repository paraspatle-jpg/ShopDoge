import React from "react";
import "./CartProducts.css";

export const CartProducts = () => {
  return (
    <div className="cart-products-container">
      <div className="cart-products-flex-container">
        <div className="cart-products">
          <div>Paras</div>
          <div>Paras Patle</div>
          <div>Paras Yashwant Patle</div>
        </div>
        
        <div className="cart-products-quantity">
          <div>Paras 1</div>
          <div>Paras 100000000</div>
          <div>Paras 2000</div>
        </div>
      </div>
    </div>
  );
};
