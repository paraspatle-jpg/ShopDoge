import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { addToCart } from "../../store/Actions/CartAction";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(props.product.id));
  };

  return (
    <div data-aos="fade-left" className="product-card-flex">
      <div className="product-card-container">
        <img
          src={props.product.image}
          alt="products"
          width="170"
          height="170"
        ></img>
        <Link to={`/products/${props.product.id}`} className="product-title">
          {props.product.title}
        </Link>
        <h2>{props.product.price}$</h2>

        <div className="btn-container">
          <span>Buy Now</span>
          <span onClick={add}>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};
