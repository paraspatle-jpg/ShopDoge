import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../productCard/ProductCard";
import { fetchProducts } from "../../store/Actions/ProductAction";
import "./ProductsDisplay.css";
import { ArrowDown } from "../assets/ArrowDown";
import { ArrowUp } from "../assets/ArrowUp";

export const ProductsDisplay = () => {
  const products = useSelector((products) => {
    return products.product.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  const [styles, setStyles] = useState({});
  const [stylespar, setStylespar] = useState({});
  const [toggle, setToggle] = useState(true);

  const handleClick = (e) => {
    setToggle(!toggle);
    if (toggle) {
      setStyles({ height: "1110px" });
      setStylespar({ height: "145vh" });
    } else {
      setStyles({ height: "400px" });
      setStylespar({ height: "500px" });
    }
  };
  if (products !== undefined) {
    return (
      <div className="product-container" style={stylespar}>
        <div className="display-products-container" style={styles}>
          {products.map((product) => {
            return <div className="product"><ProductCard product={product}  /></div>;
          })}
        </div>
        <h1>
          <span onClick={handleClick}>
            {toggle ? <ArrowDown /> : <ArrowUp />}
          </span>
        </h1>
      </div>
    );
  } else {
    return null;
  }
};
