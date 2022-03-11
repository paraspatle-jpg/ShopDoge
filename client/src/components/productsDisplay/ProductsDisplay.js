import React, { useState } from "react";
import { ProductCard } from "../productCard/ProductCard";
import "./ProductsDisplay.css";
import {ArrowDown} from "../assets/ArrowDown"
import {ArrowUp} from "../assets/ArrowUp"


export const ProductsDisplay = () => {
  const [styles,setStyles] = useState({});
  const [stylespar,setStylespar] = useState({});
  const [toggle, setToggle] = useState(true);
  const handleClick = (e) => {
    setToggle(!toggle);
    if(toggle){
      setStyles({height:"760px"});
      setStylespar({height:"100vh"});
    }
    else{
      setStyles({height:"400px"});
      setStylespar({height:"500px"});
    }
  }
  return (
    <div className="product-container" style={stylespar}>
      <div className="display-products-container" style={styles}>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        

      </div>
      <h1><span onClick={handleClick}>{toggle?<ArrowDown/>:<ArrowUp/>}</span></h1>
    </div>
  );
};
