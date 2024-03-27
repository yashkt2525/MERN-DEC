import React from "react";
import "./Banner.css";
import BannerImage from "/movie_Banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={BannerImage} alt="No image Found" />
      </div>
    </>
  );
};

export default Banner;
