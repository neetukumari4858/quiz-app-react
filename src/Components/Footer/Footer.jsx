import { Link } from "react-router-dom"
import "./Footer.css"
const Footer=()=>{
    return (
        <footer className="footer-div">
            <div className="footer-content">
                <h3 className="quiz-headind-three">Made by Neetu kumari</h3>
                <ul className="social-media">
                    <Link to="https://github.com/neetukumari4858/E-commerce"><i className="fa fa-github fa_custom quizGithubIcon"></i></Link>
                    <Link to="https://www.linkedin.com/in/neetu-kumari-261244227/"><i className="fa fa-linkedin-square quizIcon"></i></Link>
                    <Link to="https://twitter.com/NeetuKu27618407"><i className="fa fa-twitter quizIcon"></i></Link>
                
                </ul>
            </div>
        </footer>
    )
}

export {Footer}