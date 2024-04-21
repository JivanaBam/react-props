import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: "400px",
        height: "300px",
      }}
    >
      <img src={image} alt="" width="60%" height="60%" />
      <h3 style={{ color: "green" }}>{name}</h3>
      <h4 style={{ color: price > 50000 ? "red" : "blue" }}>Rs.{price}</h4>
    </div>
  );
};

export default ProductCard;
