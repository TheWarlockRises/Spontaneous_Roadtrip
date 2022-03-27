import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">PlaceHolderCompany</h3>
          <span className="registerDesc">
          What a thrilling description!
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="First Name" className="registerInput" />
            <input placeholder="First Name" className="registerInput" />
            <input placeholder="Birthday" className="registerInput" />
            <div className="bottomButtons">
              <Link to="/" className="back">Back</Link>
              <Link to="/home" className="signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}