import React from "react";
import { Increase } from "../assets/Increase";
import { Decrease } from "../assets/Decrease";
import { Delete } from "../assets/Delete";

export const CartProduct = ({ product }) => {
  const updateCount = (count) => {
    console.log(count);
  };

  const deleteFromCart = () => {
    console.log("delete from cart");
  };
  
  return (
    <div className="cart-product-flex-container">
      <span>{product.name}</span>
      <span>
        <span
          className="cart-update-svg"
          onClick={() => {
            updateCount(-1);
          }}
        >
          <Decrease></Decrease>
        </span>
        <span className="cart-count-text">{product.quantity}</span>
        <span
          className="cart-update-svg"
          onClick={() => {
            updateCount(1);
          }}
        >
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
};
