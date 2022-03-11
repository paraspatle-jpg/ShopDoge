import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <>
     <div className="login-container">
       <div  className="login-form-container">
         <h1  className="heading-login">Login</h1>
         <input data-aos="fade-left" placeholder=" &#xF199; Username" type="text" />
         <input data-aos="fade-left"  placeholder="Password" type="text" />
         <span data-aos="fade-down">Submit</span>
       </div>
     </div>
    </>
  );
};
export default Login;
