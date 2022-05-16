import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import "./SignUp.css";
import { auth } from '../../firebase';
const SignUp = () => {
    const [newUser,setNewUser]=useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        checkPolicy: false,
    })
    const navigate=useNavigate();
    const [errorMsg,setErrorMsg]=useState("")
    const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false)
    const submisionHandler=()=>{
        if (!newUser.email || !newUser.password || !newUser.confirmPassword || !newUser.firstName || !newUser.lastName ){
            setErrorMsg("Fill all fields");
            return ;
        }
        else{
            setErrorMsg("")
            setsubmitButtonDisabled(true)
            createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
            .then(async(res)=>{
                setsubmitButtonDisabled(false)
                const user=res.user
                await updateProfile(user,{
                    displayName:newUser.firstName
                });
                navigate("/");
            })
            .catch((error)=>
           { setsubmitButtonDisabled(false)
            console.log(error.message)});
        }
    }
    return (
        <div className="outer-Login-container">
            <div className="signup-container">
                <div className="login-content">
                    <h2 className='signUp-heading'>Sign up</h2>
                    <label className='signUp-lebel'>First Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Name" onChange={(event)=>setNewUser((prev)=>({...prev,firstName:event.target.value}))}/>

                    <label className='signUp-lebel'>Last Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Last Name"onChange={(event)=>setNewUser((prev)=>({...prev,lastName:event.target.value}))}/>

                    <label className='signUp-lebel'>Email address</label>
                    <input type= "text" className="sign-input" placeholder="annu@neog.com" onChange={(event)=>setNewUser((prev)=>({...prev,email:event.target.value}))}/>

                    <label className='signUp-lebel'>Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."onChange={(event)=>setNewUser((prev)=>({...prev,password:event.target.value}))}/>

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type= "text" className="sign-input" placeholder="........."onChange={(event)=>setNewUser((prev)=>({...prev, confirmPassword:event.target.value}))}/><br/>
                    <div className='termsandConditions-div'>
                        <input type="checkbox" id='termsAndCondition'/> 
                        <label htmlFor="termsAndCondition" className='terms-and-condition'>I accept all Terms & Conditions</label>
                    </div>
                    <b className='errorMsg'> {errorMsg}</b>
                    <div><button className="sign-btn" onClick={submisionHandler} disabled={submitButtonDisabled}>Sign up</button></div>
                    <h4 className='alreadyHaveAccount' > Already have an account? <Link to="/LoginPage" className='login-here'> Login Here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export { SignUp }