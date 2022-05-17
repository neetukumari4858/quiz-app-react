// import { getAuth } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth } from '../../Hooks/Context/authContext'
import "./Navbar.css"
const Navbar=()=> {
    // const auth=getAuth();
    // const {userData}=useAuth();
    // const signOut=()=>{
    //     signOut(auth)
    //     .then(() => {
    //         alert("signed out");
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     });

    // }
    return (
        <nav className="navigation">
            <label className="quiz-label">Quiz App</label>
            <ul className='quizNav-ul'>
                <Link className="anchor-link" to="/" >Home</Link>
                {/* {userData? (
                    <p className="userName cursorPointer" onClick={signOut}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Hi, {userData.name}
                    </p>
                    ) : ( */}
                        <Link className="anchor-link" to="/LoginPage" >Login</Link>
                    {/* )} */}
            </ul>
        </nav>
    )
}

export { Navbar }
