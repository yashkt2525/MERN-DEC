import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [image, setImage] = useState("");
  useEffect(() => {
    async function getMovies() {
      const data = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=7d8c0276b1704be7de53e9aace2b1aa8"
      );

      setMovies(data.data.results);
    }
    async function getTvShows() {
      const data = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=7d8c0276b1704be7de53e9aace2b1aa8"
      );

      setTv(data.data.results);
    }

    getMovies();
    getTvShows();
  }, []);

  return (
    <div>
      <Banner />
      {movies && <Row movies={movies} title={"Popular Movies"} />}
      {movies && <Row movies={movies} title={"Popular Movies"} />}
      {movies && <Row movies={movies} title={"Popular Movies"} />}
      {tv && <Row movies={tv} title={"Popular Tv Shows"} />}
    </div>
  );
};

export default Home;
