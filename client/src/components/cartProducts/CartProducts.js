import React,{ useEffect } from "react";
import {CartProduct} from "./CartProduct";
import {useSelector, useDispatch} from "react-redux"
import {getCart} from "../../store/Actions/CartAction"
import "./CartProducts.css";


export const CartProducts = () => {
  const cartProd = [
    { name: "shirt", quantity: 1 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
    { name: "Tshirt", quantity: 3 },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  },[])
  
  return (
    <div className="cart-products-container">
      <div className="cart-products-flex-container">
        <div className="cart-heading"> Your Cart</div>
        <hr className="cart-heading-hr" />
        {cartProd.map((product) => {
          return (
            <CartProduct product={product}/>
          );
        })}
      </div>
    </div>
  );
};
