import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";

const Home = () => {
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <Banner />
      <Row movies={movies} />
    </div>
  );
};

export default Home;
