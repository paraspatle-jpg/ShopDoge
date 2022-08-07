import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/Actions/AuthAction";
import { SmallLoading } from "../../components/loading/SmallLoading";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.auth);

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
  };

  if(userState.isAuthenticated){
    return <Navigate to="/"></Navigate>
  }


  return (
    <>
      <div className="signup-container">
        <div className="signup-form-container">
          <h1 className="heading-signup">Sign Up</h1>
          <input
            onChange={handleChange}
            name="name"
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
          <span data-aos="fade-down" onClick={handleClick}>
            {userState.isLoading ? <SmallLoading /> : "Submit"}
          </span>
        </div>
      </div>
    </>
  );
};
export default Register;
