import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import RightBar from "../../components/rightbar/Rightbar";
import LocationList from "../../components/locationList/LocationList";
import "./travelList.css"

export default function TravelList() {
  return (
    <>
      <Topbar />
      <div className="listContainer">
        <Sidebar />
        <LocationList />
        <RightBar />
      </div>
    </>
  );
}