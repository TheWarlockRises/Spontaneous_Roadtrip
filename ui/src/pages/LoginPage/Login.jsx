import "./Login.css";
import { Link } from "react-router-dom";
import logoImage from "../../components/assets/logo.png";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="fullLogo">
            <img src = { logoImage } alt=""
              width="75"
              height="75"
            />
            <h3 className="loginLogo">TripBucket</h3>
          </div>
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
