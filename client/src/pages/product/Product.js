import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/Actions/ProductAction";
import { Loading } from "../../components/loading/Loading";
import "./Product.css";

export const Product = () => {
  let { id } = useParams();
  const selectedProduct = useSelector((state) => state.product.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  console.log(selectedProduct);
  return (
    <div className="product-details-container">
      {selectedProduct !== undefined ? (
        <div className="product-details-flex-container">
          <div className="product-image-container">
            <img src={selectedProduct.image} alt={selectedProduct.title}></img>
          </div>
          <div className="details-container">
            <h1>{selectedProduct.title}</h1>
            <p className="category">{selectedProduct.category}</p>
            <p>{selectedProduct.description}</p>
            <h2>{selectedProduct.price}$</h2>
            <div className="buttons">
              <span>Buy Now</span>
              <span>Add to Cart</span>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
