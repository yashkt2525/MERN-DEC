import logo from "/logo.webp";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Please Wait" />
        <div className="div">
          {/* <Link to="movies">Movies</Link> */}
          <h2>Movies</h2>
          <h2>Home</h2>
          <h2>tv Shows</h2>
        </div>

        <div className="icon">
          <BsSearch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
