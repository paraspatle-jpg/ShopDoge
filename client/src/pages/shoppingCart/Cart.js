import React, { useContext } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/context";

const Cart = () => {
  const userDetails = useContext(UserContext);

  const serverFetch=()=>{
    axios.get(`https://localhost:5000/api/cart/${userDetails.userID}`)
    .then((response)=>{

    })
  }

  return (
    <>
      <Container>
        {
          !userDetails.is_loggedin ?
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
                  
                  </>
              }
            </>
        }
      </Container>
    </>
  );
};
export default Cart;
