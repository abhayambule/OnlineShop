import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <h1>ProductListinng</h1>
    </div>
  );
};

export default ProductListing;
