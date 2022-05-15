import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
            <h2 className='Login-heading-two'>Login</h2>
            <label className='lebel-text'>Email address</label>
            <input className="user-input"
              type="email"
              placeholder="  demo@gmail.com "
              />

            <label className='lebel-text'>Password</label>
            <input className="user-input" placeholder="  Enter Password..."
              type="password"
              
             
            />
            <div className='forgotPasswodText'>
              <input type="checkbox" id="rememberMe" name="rememberMe" 
               
              />
              <label htmlFor="rememberMe" className="remember-me">Remember me </label>
              <p className='forgotPassword'>Forgot Password ?</p>
            </div>

            <button type='button' className="videologin-btn" >Login</button>

            <h4 className='create-account'><Link to="/SignUpPage" className='createAccount'>Create New Account</Link></h4>
          </div>
        </form>
        </div>
    </div>
  )
}
export {Login}