import React, { useState, useEffect} from "react";
import axios from "axios"
import { Button, Container } from "react-bootstrap"
import { Cards } from "../../components/card/Card"

const Products = () => {
  const [products,setProducts] = useState([]);
  const [num,setNum]= useState(6)
  const apiFetch = (num)=>{
    axios.get(`https://fakestoreapi.com/products?limit=${num}`)
          .then((response)=>{
            console.log(response.data)
            setProducts(response.data);
          })
  }
  const handleClick=()=>{
    const temp = num +3;
    setNum(temp);
    apiFetch(num);
  }
  useEffect(()=>{
    apiFetch(num);
  },[])


  return (
    <>
      <Container>
        <h1>Products</h1>
        {products.map((product)=>
        <Cards title = {product.title} image = {product.image} description = {product.description} price = {product.price}/>
        )}
        <Button variant="dark" style={{margin:"30px 0px 10px 35vw"}} onClick={handleClick}>Load More Products</Button>
        </Container>
    </>
  );
};
export default Products;
