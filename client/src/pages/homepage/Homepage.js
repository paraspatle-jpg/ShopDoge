import React,{useEffect,useState} from "react";
import "./Homepage.css" 

const Homepage = () => {
  const [styles,setStyles] = useState({})
  const [stylesHero,setStylesHero] = useState({})
  useEffect(() =>{
    setStyles({borderTop: "80vh solid orange"})
    setStylesHero({opacity: "1"})
  },[]);
  return (
    <>
      <div className="orange-div" style={styles}></div>
      <div className="hero-content" style={stylesHero}>
      </div>
    </>
  );
};
export default Homepage;
