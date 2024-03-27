import React, { useState } from "react";
import "./Row.css";
import Card from "../card/Card";

const Row = ({ movies, title }) => {
  console.log("Movies", movies);
  return (
    <div className="row-container">
      <h1>{title}</h1>
      <div className="row">
        <div className="cards">
          {movies.map((movie) => (
            <Card
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
