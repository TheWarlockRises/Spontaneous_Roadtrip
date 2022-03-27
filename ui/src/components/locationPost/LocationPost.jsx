import "./locationPost.css";
import PinDropIcon from '@mui/icons-material/PinDrop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";

export default function LocationPost({ post }) {
  const deleteLocation = () =>{
    console.log("test")
  }

  return (
    <div className="loc">
      <div className="locWrapper">
        <div className="locCenter">
            <li className="locItem">
                <PinDropIcon className="locIcon" />
                <span className="locText">Location</span>
            </li>
            <Link to="/directions" className="travelButton">Travel!</Link>
        </div>
        <div className="locBottom">
          <div className="locBottomLeft">
          </div>
          <div className="locBottomRight">
            <DeleteForeverIcon className="trashcan" onClick={deleteLocation}/>
          </div>
        </div>
      </div>
    </div>
  );
}