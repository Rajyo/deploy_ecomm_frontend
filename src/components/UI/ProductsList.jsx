import React from "react";
import ProductCard from "./ProductCard";
import "./product-card.css";

const ProductsList = ({ data }) => {
  return (
    <div className="productsWrapper">
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductsList;
