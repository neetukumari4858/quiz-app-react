// import React from 'react'
import "./Home.css"
import { Footer } from '../../Components/Footer/Footer'
import {quizQuestion} from "../Questions/data"
import {CategoryCard} from "../../Components/CategoryCard/CategoryCard"
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

            </div>

        </div>
        <Footer/>
        </>
    )
}
export { Home }




