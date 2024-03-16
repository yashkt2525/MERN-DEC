import React from "react";
import image from "/image.jpg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={image} alt="No image Found" />
    </div>
  );
};

export default Card;
