import React from "react";
import "./CartProducts.css";
import { Increase } from "../assets/Increase";
import { Decrease } from "../assets/Decrease";
import { Delete } from "../assets/Delete";

export const CartProducts = () => {
  const cartProd = [
    { name: "shirt", quantity: 1 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
  ];

  const updateCount = (count) => {console.log(count);};
  const deleteFromCart = () => {console.log("delete from cart")};

  return (
    <div className="cart-products-container">
      <div className="cart-products-flex-container">
        <div className="cart-heading"> Your Cart</div>
        <hr className="cart-heading-hr" />
        {cartProd.map((product) => {
          return (
            <div className="cart-product-flex-container">
              <span>{product.name}</span>
              <span>
                <span className="cart-update-svg" onClick={()=>{updateCount(-1)}}>
                  <Decrease></Decrease>
                </span>
                <span className="cart-count-text">{product.quantity}</span>
                <span className="cart-update-svg" onClick={()=>{updateCount(1)}}>
                  <Increase></Increase>
                </span>
                <span
                  className="cart-update-svg cart-delete-svg"
                  onClick={deleteFromCart}
                >
                  <Delete></Delete>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
