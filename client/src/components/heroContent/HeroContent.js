import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroContent.css";

export const HeroContent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [styles, setStyles] = useState({});
  const updateDimensions = () => {
    console.log(width)
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [window.innerWidth]);
  
  useEffect(() => {
    if(width >1116){
    setStyles({ borderTop: "80vh solid orange",borderRight: `${window.visualViewport.width}px solid transparent`});
    }
    else{
      setStyles({ borderTop: "80vh solid orange",borderRight: `${window.visualViewport.width}px solid transparent`});
    }
  }, [width]);

  return (
    <div>
      <div className="orange-div" style={styles}></div>
      <div className="hero-content">
        <div data-aos="fade-up" className="orange">
          <h2>Get the Best Deals on ShopDoge</h2>
          <h4>SignIn for best experience</h4>
          <h4>Recieve delivery within 2-3 days</h4>
          <h4>Pay after you recieve</h4>
          <Link to="/products" className="hero-link">
            Products
          </Link>
        </div>
        <div data-aos="fade-down" className="black">
          <h2>Shopping made easy on ShopDoge</h2>
          <h4>SignIn for best experience</h4>
          <h4>Recieve delivery within 2-3 days</h4>
          <h4>Pay after you recieve</h4>
          <Link to="/products" className="hero-link">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};
