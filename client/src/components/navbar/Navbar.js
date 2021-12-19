import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { UserContext } from "../../contexts/context";

export const Navbars = () => {
  const userDetails = useContext(UserContext);
  return (
    <div>
      {console.log(userDetails)}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ShopDoge
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {!userDetails.is_loggedin?<>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              </>:null}
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Shopping Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
