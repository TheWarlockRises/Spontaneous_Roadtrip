import "./Login.css";
import { Link } from "react-router-dom";
import logoImage from "../../components/assets/logo.png";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <img src={ logoImage } alt="" 
          width="50px"
          height="50px"
          />
          <h3 className="loginLogo">TripBucket</h3>
          <span className="loginDesc">
            Let's see the world together!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input type = "Password" placeholder="Password" className="loginInput" />
            <Link to="/home" className="loginButton">Log In</Link>
            <Link to="/register" className="loginRegisterButton">Create a new account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
