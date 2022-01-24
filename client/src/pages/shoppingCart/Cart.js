import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartProducts } from "../../components/cart/CartProducts"
import { UserContext } from "../../contexts/context";

const Cart = () => {
  const userDetails = useContext(UserContext);
  const details = localStorage.getItem('userDetails');
  return (
    <>
      <Container>
        {
          !details ?
            <div style={{ margin: "auto", height: "100vh", width: "50vw", marginTop: "10%" }}>
              <h2>Hey Stranger, Please Login first To access your cart.</h2>
              <Button as={Link} to="/login" style={{ marginLeft: "40%" }} >Login</Button>
            </div> :
            <>
              <h1>Shopping Cart</h1>
              {
                !userDetails.cart ?
                  <><h2>You have nothing in your cart.</h2></> :
                  <>
                   { 
                    userDetails.products.map((product) =>{
                      if(userDetails.cart.find((id)=>{return id===product.id})){
                        <CartProducts id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />
                      }
                    })
                  }
                  </>
              }
            </>
        }
      </Container>
    </>
  );
};
export default Cart;
