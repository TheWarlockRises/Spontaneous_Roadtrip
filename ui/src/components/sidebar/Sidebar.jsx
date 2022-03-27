import "./sidebar.css";
import MapIcon from '@mui/icons-material/Map';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Users } from "../../dummyData";
import Friend from "../friends/friends";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MapIcon className="sidebarIcon" />
            <Link to="/travelList" className="sidebarListItemText">View Planned Trips</Link>
          </li>
          <li className="sidebarListItem">
            <AddLocationAltIcon className="sidebarIcon" />
            <Link to="/addLocation" className="sidebarListItemText">Add New Trip</Link>
          </li>
          <li className="sidebarListItem">
            <HikingIcon className="sidebarIcon" />
            <Link to="/journeySelector" className="sidebarListItemText">Embark On A Journey!</Link>
          </li>
          <li className="sidebarListItem">
            <AddCircleIcon className="sidebarIcon" />
            <Link to="/createPost" className="sidebarListItemText">Create A New Post</Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}