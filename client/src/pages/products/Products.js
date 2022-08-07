import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../components/productCard/ProductCard";
import { fetchProducts } from "../../store/Actions/ProductAction";
import { Loading } from "../../components/loading/Loading";
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => {
    return state.product.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log(products);
  return (
    <div className="product-page-container">
      {products !== undefined ? (
        <div className="product-page-flex-container">
          {products.map((product) => {
            return (
              <div className="product">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Products;
