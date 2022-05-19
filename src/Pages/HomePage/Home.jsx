import React from 'react'
import "./Home.css"
import { Footer } from '../../Components/Footer/Footer'
import {quizQuestion} from "./../Questions/data"
import {CategoryCard} from "./../../Components/CategoryCard/CategoryCard"
const Home = () => {
    return (
        <>
        <div className="outer-container">
            <div className="headings">
                <h1 className='quizHeading-one'>Quiz Masters</h1>
                <h2 className='quizHeadingTwo'>Featured Sports Quiz</h2>
            </div>
            <div className="first-section">
            {quizQuestion.map(({ categoryId, categoryName, categoryImg , categoryDescription}) =>{
                return (
                    <CategoryCard
                        key={categoryId}
                        categoryId={categoryId}
                        categoryImg={categoryImg}
                        categoryName={categoryName}
                        categoryDescription={categoryDescription}
                    />
                    )
            })}
                {/* <div className="categories"> */}
                {/* <Link to="RulesPage"><img className="images" src={cricket} alt='error' /></Link>
                    <div className="text-div" >
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Cricket</h1>
                    </div>

                </div>
                <div className="categories">
                    <img className="images" src={football} alt='error' />
                    <div className="text-div">
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Football</h1>
                    </div>

                </div>
                <div className="categories">
                    <img className="images" src={badminton} alt='error' />
                    <div className="text-div">
                        <p className="paragraph">You don't Play For the Crowd,you Play For the country!</p>
                        <h1 className="button quizHeading-one">Basketball</h1>
                    </div>

                </div> */}
            </div>

        </div>
        <Footer/>
        </>
    )
}
export { Home }




