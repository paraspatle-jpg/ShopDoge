import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [styles, setStyles] = useState({});
  const [stylesHero, setStylesHero] = useState({});
  useEffect(() => {
    setStyles({ borderTop: "80vh solid orange" });
    setStylesHero({ opacity: "1" });
  }, []);
  return (
    <>
      <div className="orange-div" style={styles}></div>
      <div className="hero-content" style={stylesHero}>
        <div className="orange">
          <h2>Get the Best Deals on ShopDoge</h2>
          <Link to="/products" className="hero-link">
            Products
          </Link>
        </div>
        <div className="black">
          <h2>Shopping made easy on ShopDoge</h2>
          <h4>SignIn for best experience</h4>
          <h4>Recieve delivery within 2-3 days</h4>
          <h4>Pay after you recieve</h4>
          <Link to="/products" className="hero-link">
            SignIn
          </Link>
        </div>
      </div>
    </>
  );
};
export default Homepage;
