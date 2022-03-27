import "./register.css";
import { Link } from "react-router-dom";
import logoImage from "../../components/assets/logo.png";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
        <div className="fullLogo">
            <img src = { logoImage } alt=""
              width="75"
              height="75"
            />
            <h3 className="loginLogo">TripBucket</h3>
          </div>
          <span className="registerDesc">
          Let's see the world together!
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input type = "username" placeholder="Username" className="registerInput" />
            <input type = "Password" placeholder="Password" className="registerInput" />
            <input placeholder="First Name" className="registerInput" />
            <input placeholder="Last Name" className="registerInput" />
            <input placeholder="Birthday (M/D/Y)" className="registerInput" />
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