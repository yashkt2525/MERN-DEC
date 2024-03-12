import React, { useState } from "react";
import "./Row.css";
import Card from "../card/Card";

const Row = () => {
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(movies);
  return (
    <div className="row">
      <h1>Top 10 Movie in India</h1>
      <div className="cards">
        {movies.map((images) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Row;
