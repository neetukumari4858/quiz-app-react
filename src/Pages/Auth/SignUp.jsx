import { Link } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="outer-Login-container">
            <div className="signup-container">
                <div className="login-content">
                    <h2 className='signUp-heading'>Sign up</h2>
                    <label className='signUp-lebel'>First Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Name"/>

                    <label className='signUp-lebel'>Last Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Last Name"/>

                    <label className='signUp-lebel'>Email address</label>
                    <input type= "text" className="sign-input" placeholder="annu@neog.com"/>

                    <label className='signUp-lebel'>Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/>

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/><br/>
                    <div className='termsandConditions-div'>
                        <input type="checkbox" id='termsAndCondition'/> 
                        <label htmlFor="termsAndCondition" className='terms-and-condition'>I accept all Terms & Conditions</label>
                    </div>
                    
                    <button className="sign-btn">Sign up</button>
                    <h4 className='alreadyHaveAccount' > Already have an account? <Link to="/LoginPage" className='login-here'> Login Here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export { SignUp }