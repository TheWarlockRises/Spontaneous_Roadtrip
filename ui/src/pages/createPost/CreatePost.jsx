import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Share from "../../components/Share/Share";
import Rightbar from "../../components/rightbar/Rightbar";
import GoogleMap from "../../components/googleMap/maps";
import "./createPost.css"

export default function createPost() {
  return (
    <>
      <Topbar />
      <div className="shareContainer">
        <Sidebar />
        <div className="sharing">
            <div className='shareMap'>
                <GoogleMap />
            </div>
            <Share />
        </div>
        <Rightbar/>
      </div>
    </>
  );
}