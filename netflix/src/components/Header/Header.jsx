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
          <Link to={"/"}>Home</Link>
          <Link to={"tvshows"}>TV Shows</Link>
          <Link to={"movies"}>Movies</Link>
          <Link to={"newandpopular"}>New & Popular</Link>
          <Link to={"mylist"}>My List</Link>
          <Link to={"browsebylanguage"}>Browse By Language</Link>
        </div>

        <div className="icon">
          <BsSearch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
