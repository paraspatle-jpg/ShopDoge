import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      console.log(user)
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <div className="login-container">
        <div className="login-form-container">
          <h1 className="heading-login">Login</h1>
          <input
            onChange={handleChange}
            name="email"
            data-aos="fade-left"
            placeholder="Email"
            type="text"
          />
          <input
            onChange={handleChange}
            data-aos="fade-left"
            placeholder="Password"
            name="password"
            type="password"
          />
          <span data-aos="fade-down">Submit</span>
        </div>
      </div>
    </>
  );
};
export default Login;
