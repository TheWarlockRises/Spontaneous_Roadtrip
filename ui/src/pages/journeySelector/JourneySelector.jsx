import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./journeySelector.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="journeyContainer">
        <Sidebar />
        <div className="middle">
            <h1>You're about to embark on a journey!</h1>
            <h2>Where will you go...</h2>
            <div className="botButtons">
                <Link to="/directions" className="randomButton">Choose for me!</Link>
                <Link to="/travelList" className="selectButton">Select from your list</Link>
            </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
}