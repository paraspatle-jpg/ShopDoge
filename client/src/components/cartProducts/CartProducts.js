import React from "react";
import "./CartProducts.css";

export const CartProducts = () => {
  const cartProd = [
    { name: "shirt", quantity: 1 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
  ];

  return (
    <div className="cart-products-container">
      <div className="cart-products-flex-container">
        <div className="cart-heading"> Your Cart</div>
        <hr/>
        {cartProd.map((product) => {
          return (
            <div className="cart-product-flex-container">
              <span>{product.name}</span>
              <span>{product.quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
