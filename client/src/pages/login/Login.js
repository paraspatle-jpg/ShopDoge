import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const [details, setdetails] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setdetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(details);
  }
  
  const handleSubmit = () => {
    console.log(details);
    const body = details;
    axios.post("http://localhost:5000/api/login", body)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <Container className="p-0" >
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Login;
