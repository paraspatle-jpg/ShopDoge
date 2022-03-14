import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  return (
    <div data-aos="fade-left" className="product-card-flex">
      <div className="product-card-container">
        <img
          src={props.product.image}
          alt="products"
          width="200"
          height="200"
        ></img>
        <h3>{props.product.title}</h3>
        <div className="btn-container">
          <span>Buy Now</span>
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};
