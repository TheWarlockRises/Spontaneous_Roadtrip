import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Share from "../../components/Share/Share";
import Rightbar from "../../components/rightbar/Rightbar";
import "./createPost.css"

export default function createPost() {
  return (
    <>
      <Topbar />
      <div className="shareContainer">
        <Sidebar />
        <div className="sharing">
            <div className='shareMap'>
                <p>Map will go here</p>
            </div>
            <Share />
        </div>
        <Rightbar/>
      </div>
    </>
  );
}