import React, { useState } from "react";
import { ProductCard } from "../productCard/ProductCard";
import "./ProductsDisplay.css";

export const ProductsDisplay = () => {
  const [styles,setStyles] = useState({});
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
      <h1><span onClick={()=>setStyles({height:"650px"})}>V</span></h1>
    </div>
  );
};
