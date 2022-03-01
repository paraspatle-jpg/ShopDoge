import React, { useState } from "react";
import { ProductCard } from "../productCard/ProductCard";
import "./ProductsDisplay.css";
import {ArrowDown} from "../assets/ArrowDown"
import {ArrowUp} from "../assets/ArrowUp"


export const ProductsDisplay = () => {
  const [styles,setStyles] = useState({});
  const [toggle, setToggle] = useState(true);
  const handleClick = (e) => {
    setToggle(!toggle);
    if(toggle){
      setStyles({height:"660px"});
    }
    else{
      setStyles({height:"330px"});
    }
  }
  return (
    <div className="product-container">
      <div className="display-products-container" style={styles}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
      <h1><span onClick={handleClick}>{toggle?<ArrowDown/>:<ArrowUp/>}</span></h1>
    </div>
  );
};
