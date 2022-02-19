import React, { useState} from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Login = () => {
  //for storing user info
  const redirect = localStorage.getItem("userDetails");
  const [details, setdetails] = useState({
    email: "",
    password: ""
  });

  //taking user information
  const handleChange = (e) => {
    setdetails(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(details);
  }

  //logging in 
  const handleSubmit = () => {
    const body = details;
    axios.post("http://localhost:5000/api/login", body)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userDetails", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      })
  }

  // if logged in redirect
  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (
    <>
     Login
    </>
  );
};
export default Login;
