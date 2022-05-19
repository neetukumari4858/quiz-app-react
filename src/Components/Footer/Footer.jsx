import { Link } from "react-router-dom"
import "./Footer.css"
const Footer=()=>{
    return (
        <footer className="footer-div">
            <div className="footer-content">
                <h3 className="quiz-headind-three">Made by Neetu kumari</h3>
                <ul className="social-media">
                    <a target='_blank' href="https://github.com/neetukumari4858"><i className="fa fa-github fa_cushrefm quizGithubIcon"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/neetu-kumari-261244227/"><i className="fa fa-linkedin-square quizIcon"></i></a>
                    <a target='_blank' href="https://twitter.com/NeetuKu27618407"><i className="fa fa-twitter quizIcon"></i></a>
                
                </ul>
            </div>
        </footer>
    )
}
export {Footer}