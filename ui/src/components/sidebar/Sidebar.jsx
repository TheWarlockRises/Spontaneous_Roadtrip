import "./sidebar.css";
import MapIcon from '@mui/icons-material/Map';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import { Users } from "../../dummyData";
import Friend from "../friends/friends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MapIcon className="sidebarIcon" />
            <span className="sidebarListItemText">View Planned Trips</span>
          </li>
          <li className="sidebarListItem">
            <AddLocationAltIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Add New Trip</span>
          </li>
          <li className="sidebarListItem">
            <HikingIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Send me to a place!</span>
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