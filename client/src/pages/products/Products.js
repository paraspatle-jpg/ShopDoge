import React, { useState, useEffect} from "react";
import axios from "axios"
import { Container } from "react-bootstrap"
import { Cards } from "../../components/card/Card"

const Products = () => {
  const [products,setProducts] = useState([]);
  const apiFetch = (num)=>{
    axios.get(`https://fakestoreapi.com/products?limit=${num}`)
          .then((response)=>{
            console.log(response.data)
            setProducts(response.data);
          })
  }
  useEffect(()=>{
    apiFetch(6);
  },[])
  return (
    <>
      <Container>
        <h1>Products</h1>
        {products.map((product)=>
        <Cards title = {product.title} image = {product.image} description = {product.description} price = {product.price}/>
        )}
        </Container>
    </>
  );
};
export default Products;
