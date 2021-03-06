import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RightBar from "../../components/rightbar/Rightbar";
import GoogleMap from "../../components/googleMap/maps";
import "./addLocation.css"
import { Link } from "react-router-dom";

export default function TravelList() {
  return (
    <>
      <Topbar />
      <div className="listContainer">
        <Sidebar />
        <div className="list">
            <div className="listWrapper">
                <div className='map'>
                    <GoogleMap />
                </div>
                <div className="buttons">
                  <Link to="/travelList" className="button">Cancel</Link>
                  <Link to="/travelList" className="button">Add</Link>
                </div>
            </div>
        </div>
        <RightBar />
      </div>
    </>
  );
}