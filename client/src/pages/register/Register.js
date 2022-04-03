import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/Actions/AuthAction";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      console.log(user);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => {
    dispatch(register(user));
  }

  return (
    <>
      <div className="signup-container">
        <div className="signup-form-container">
          <h1 className="heading-signup">Sign Up</h1>
          <input
            onChange={handleChange}
            name="username"
            data-aos="fade-left"
            placeholder=" &#xF199; Username"
            type="text"
          />
          <input
            onChange={handleChange}
            name="email"
            data-aos="fade-left"
            placeholder="Email"
            type="text"
          />
          <input
            onChange={handleChange}
            name="password"
            data-aos="fade-left"
            placeholder="Password"
            type="text"
          />
          <span data-aos="fade-down" onClick={handleClick}>Submit</span>
        </div>
      </div>
    </>
  );
};
export default Register;
