import "./topbar.css";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <span className="logo"><Link to="/home" className="logoText">
      <img src = { logoImage } alt=""
        width="50"
        height="50"
        />
        TripBucket.com</Link></span>
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