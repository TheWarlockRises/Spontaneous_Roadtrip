import "./topbar.css";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src = { logoImage } alt=""
        width="30"
        height="30"
        />
        <Link to="/home" className="logoText">TripBucket.com</Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/home" className="topbarLink">Homepage</Link>
          <Link to="/profile" className="topbarLink">Profile</Link>
          <Link to="/" className="topbarLink">Log-out</Link>
        </div>
      </div>
    </div>
  );
}