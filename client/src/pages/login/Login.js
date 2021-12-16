import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";



const Login = () => {

  const [details, setdetails] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setdetails({ [e.target.name]: e.target.value })
  }


  return (
    <>
      <Container className="p-0" >
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Login;
