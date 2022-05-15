import React from 'react'
import "./Home.css"
import { Footer } from '../../Components/Footer/Footer'
// import { Link } from 'react-router-dom'
import { badminton, cricket, football } from "./../../Image"
const Home = () => {
    return (
        <>
        <div className="outer-container">
            <div className="headings">
                <h1 className='quizHeading-one'>Quiz Masters</h1>
                {/* <h2>Let's test your memory</h2>  */}
                <h2 className='quizHeadingTwo'>Featured Sports Quiz</h2>
            </div>
            <div className="first-section">
                {/* <!-- first box --> */}
                <div className="categories">
                    <img className="images" src={cricket} alt='error' />
                    <div className="text-div">
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Cricket</h1>
                    </div>

                </div>
                {/* <!-- second box --> */}
                <div className="categories">
                    <img className="images" src={football} alt='error' />
                    <div className="text-div">
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Football</h1>
                    </div>

                </div>
                {/* <!-- third box--> */}
                <div className="categories">
                    <img className="images" src={badminton} alt='error' />
                    <div className="text-div">
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Basketball</h1>
                    </div>

                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}
export { Home }





    //     <div className="headings">
    //     <h1>Quiz Masters</h1>
    //     {/* <h2>Let's test your memory</h2> */}
    //     <h2>Featured Sports Quiz</h2>
    // </div>
    // <div className="first-section">
    //     {/* <!-- first box --> */}
    //     <div className="cricket-box categories">
    //         <Link to="#"> <img src={cricket} alt='error'/></Link>
    //         <div>
    //             <i className="gg-lock-unlock"></i>
    //             <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
    //             <h1 className="button">Cricket</h1>
    //         </div>
    //         <i className="fa fa-unlock"></i>
    //     </div>
    //     {/* <!-- second box --> */}
    //     <div className="football-box categories">
    //         <Link to="#"> <img src={football} alt='error'/></Link>
    //         <div>
    //             <i className="gg-lock-unlock"></i>
    //             <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
    //             <h1 className="button">Football</h1>
    //         </div>
    //         <i className="fa fa-lock"></i>
    //     </div>
    //     {/* <!-- third box--> */}
    //     <div className="basketball-box categories">
    //         <Link to="#"> <img src={badminton} alt='error'/></Link>
    //         <div>
    //             <i className="gg-lock-unlock"></i>
    //             <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
    //             <h1 className="button">Basketball</h1>
    //         </div>
    //         <i className="fa fa-lock"></i>
    //     </div>
    // </div>