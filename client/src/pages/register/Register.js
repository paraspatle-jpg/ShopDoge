import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Register = (props) => {
  // for redirection
  const redirect = localStorage.getItem("userDetails")
  // user details
  const [details, setdetails] = useState({
    name: "",
    email: "",
    password: "",
  })
  // handling input
  const handleChange = (e) => {
    setdetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  // handling register request
  const handleSubmit = () => {
    console.log(details);
    const body = details;
    axios.post("http://localhost:5000/api/register", body)
    .then((response) => {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    })
  }

  if (redirect) {
    return <Navigate to='/'/>;
  }
  return (
    <>
      <Container className="p-0" >
        <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" onChange={handleChange} />
          </Form.Group>

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
export default Register;
