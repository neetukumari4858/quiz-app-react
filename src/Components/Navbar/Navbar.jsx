import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar=()=> {
    return (
        <nav className="navigation">
            <label className="quiz-label">Quiz App</label>
            <ul className='quizNav-ul'>
                <Link className="anchor-link" to="/" >Home</Link>
                <Link className="anchor-link" to="/LoginPage" >Login</Link>
            </ul>
        </nav>
    )
}

export { Navbar }
