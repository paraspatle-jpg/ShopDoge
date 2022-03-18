import React, { useState, useEffect } from "react";
import "./Register.css"


const Register = () => {

  const [user, setUser] = useState({username:"", email: "", password: "" });
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
     <div className="signup-container">
       <div  className="signup-form-container">
         <h1  className="heading-signup">Sign Up</h1>
         <input onChange={handleChange} name="username" data-aos="fade-left" placeholder=" &#xF199; Username" type="text" />
         <input onChange={handleChange} name="email" data-aos="fade-left"  placeholder="Email" type="text" />
         <input onChange={handleChange} name="password" data-aos="fade-left"  placeholder="Password" type="text" />
         <span data-aos="fade-down">Submit</span>
       </div>
     </div>
    </>
  );
};
export default Register;
