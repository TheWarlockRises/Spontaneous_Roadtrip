import "./locationPost.css";
import PinDropIcon from '@mui/icons-material/PinDrop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function LocationPost({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
            <li className="sidebarListItem">
                <PinDropIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Location</span>
            </li>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          </div>
          <div className="postBottomRight">
            <DeleteForeverIcon className="sidebarIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}