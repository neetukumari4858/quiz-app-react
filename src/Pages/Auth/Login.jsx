import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';

import "./Login.css"
const Login = () => {
  const [loginUserData,setloginUserData]=useState({
    email: "",
    password: "",
    checkPolicy: false,
  })
  const navigate=useNavigate();
  const [errorMsg,setErrorMsg]=useState("")
  const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false)
  const loginHandler=()=>{
      if (!loginUserData.email || !loginUserData.password){
          setErrorMsg("Fill all fields");
          return ;
      }
      else{
          setErrorMsg("")
          setsubmitButtonDisabled(true)
          signInWithEmailAndPassword(auth,loginUserData.email,loginUserData.password)
          .then((res)=>{
              setsubmitButtonDisabled(false)
              navigate("/");
          })
          .catch((error)=>
        { setsubmitButtonDisabled(false)
          console.log(error.message)});
      }
  }
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
            <h2 className='Login-heading-two'>Login</h2>
            <label className='lebel-text'>Email address</label>
            <input className="user-input"
              type="email"
              placeholder="  demo@gmail.com " onChange={(event)=>setloginUserData((prev)=>({...prev, email:event.target.value}))}
              />

            <label className='lebel-text'>Password</label>
            <input className="user-input" placeholder="  Enter Password..."
              type="password" onChange={(event)=>setloginUserData((prev)=>({...prev,password:event.target.value}))}
              
             
            />
            <div className='forgotPasswodText'>
              <input type="checkbox" id="rememberMe" name="rememberMe" 
               
              />
              <label htmlFor="rememberMe" className="remember-me">Remember me </label>
              <p className='forgotPassword'>Forgot Password ?</p>
            </div>
            <b className='errorMsg'> {errorMsg}</b>
            <button type='button' className="videologin-btn" disabled={submitButtonDisabled} onClick={loginHandler}>Login</button>

            <h4 className='create-account'><Link to="/SignUpPage" className='createAccount'>Create New Account</Link></h4>
          </div>
        </form>
        </div>
    </div>
  )
}
export {Login}