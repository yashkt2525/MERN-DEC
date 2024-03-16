import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header/Header";
import TvShows from "./pages/TvShows";
import MyList from "./pages/MyList";
import NewAndPopular from "./pages/NewAndPopular";
import BrowseByLang from "./pages/BrowseByLang";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<MoviePage />} />
            <Route path="tvshows" element={<TvShows />} />
            <Route path="mylist" element={<MyList />} />
            <Route path="newandpopular" element={<NewAndPopular />} />
            <Route path="browsebylanguage" element={<BrowseByLang />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
