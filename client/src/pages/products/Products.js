import React, { useState } from "react";


const Products = () => {
  const [num, setNum] = useState(6);
  const handleClick = () => {
    const temp = num + 5;
    setNum(temp);
  }

  return (
    <>
      
    </>
  );
};
export default Products;
