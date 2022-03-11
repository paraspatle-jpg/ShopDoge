import React from "react";
import { HeroContent } from "../../components/heroContent/HeroContent";
import { ProductsDisplay } from "../../components/productsDisplay/ProductsDisplay"
import "./Homepage.css";

const Homepage = () => {

  return (
    <div className="homepage-container">
      <HeroContent />
      <ProductsDisplay />
    </div>
  );
};
export default Homepage;
