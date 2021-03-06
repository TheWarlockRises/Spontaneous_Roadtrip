import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RightBar from "../../components/rightbar/Rightbar";
import GoogleMap from "../../components/googleMap/maps";
import "./directions.css"
import { Link } from "react-router-dom";

export default function TravelList() {
  return (
    <>
      <Topbar />
      <div className="listContainer">
        <Sidebar />
        <div className="list">
            <div className="listWrapper">
                <div className='newmap'>
                    <GoogleMap />
                </div>
                <div className="buttons">
                  <Link to="/createPost" className="button">Share</Link>
                </div>
            </div>
        </div>
        <RightBar />
      </div>
    </>
  );
}