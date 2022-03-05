import React from "react";
import "./Register.css"


const Register = (props) => {

  return (
    <>
     <div className="signup-container">
       <div  className="signup-form-container">
         <h1  className="heading-signup">Sign Up</h1>
         <input data-aos="fade-left" placeholder=" &#xF199; Username" type="text" />
         <input data-aos="fade-left"  placeholder="Email" type="text" />
         <input data-aos="fade-left"  placeholder="Password" type="text" />
         <span data-aos="fade-down">Submit</span>
       </div>
     </div>
    </>
  );
};
export default Register;
