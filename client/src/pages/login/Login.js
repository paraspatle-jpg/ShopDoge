import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/Actions/AuthAction";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

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

  const userState = useSelector((state) => state.auth)

  const handleClick = () => {
    dispatch(login(user));
  }

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
          <span onClick = {handleClick} data-aos="fade-down" >{userState.isLoading?"Loading":"Submit"}</span>
        </div>
      </div>
    </>
  );
};
export default Login;
