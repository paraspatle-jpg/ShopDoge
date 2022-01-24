import React, { useState,useContext } from "react";
import { Button, Container } from "react-bootstrap"
import { Cards } from "../../components/card/Card"
import { UserContext } from "../../contexts/context";

const Products = () => {
  const [num, setNum] = useState(6);
  const userDetails = useContext(UserContext);
  const handleClick = () => {
    const temp = num + 5;
    setNum(temp);
  }

  return (
    <>
      <Container>
        <h1>Products</h1>
        {userDetails.products.slice(0,num).map((product) =>
          <Cards id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />
        )}
        {num<20?
        <Button variant="dark" style={{ margin: "30px 0px 10px 35vw" }} onClick={handleClick}>Load More Products</Button>:null}
      </Container>
    </>
  );
};
export default Products;
