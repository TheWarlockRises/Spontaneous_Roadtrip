import React from 'react';
import './login.css';

const Login = () => (
  <div className="login">
      <div className="loginWrapper">
        <div className="loginSubLeft">
            <h3 className="loginLogo"> PlaceholderCompany </h3>
            <span className="loginDesc"> 
                Woah what a thrilling description!
            </span>
        </div>
        <div className="loginSubRight">
            <div className='loginBox'>
                <input placeholder="Username" className='loginInput'/>
                <input placeholder="Password" className='loginInput'/>
                <button className='loginButton'>Login</button>
                <span className='loginForgot'>Forgot your password?</span>
                <button className='loginRegisterButton'>Create a new account</button>
            </div>
        </div>
      </div>
  </div>
);

export default Login;