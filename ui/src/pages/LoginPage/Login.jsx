import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PlaceHolderCompany</h3>
          <span className="loginDesc">
            What a thrilling description!
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
