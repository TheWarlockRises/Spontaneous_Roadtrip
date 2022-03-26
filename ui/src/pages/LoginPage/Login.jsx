import "./Login.css";
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
            <input placeholder="Email" className="loginInput" />
            <input type = "password" placeholder="Password" className="loginInput" />
            <Link to="/home" className="loginButton">Log In</Link>
            <Link to="/register" className="loginRegisterButton">Create a new account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}