import Topbar from "../../components/topbar/Topbar";
import "./profileEdit.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="edit">
        <h1 className="topText">Edit Profile</h1>
        <div className="editWrapper">
            <div className="editLeft">
                <h2 className="fieldText">Username</h2>
                <h2 className="fieldText">Password</h2>
                <h2 className="fieldText">First Name</h2>
                <h2 className="fieldText">Last Name</h2>
                <h2 className="fieldText">Birthday</h2>
            </div>
            <div className="editRight">
                <input placeholder="Username" className="editInput" />
                <input placeholder="Password" className="editInput" />
                <input placeholder="First Name" className="editInput" />
                <input placeholder="Last Name" className="editInput" />
                <input placeholder="Birthday" className="editInput" />
            </div>
        </div>
        <div className="bottomText">
            <Link to="/profile" className="button">Back</Link>
            <Link to="/profile" className="button">Save</Link>
        </div>
      </div>
    </>
  );
}