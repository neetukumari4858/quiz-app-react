import "./Rules.css"
import { useNavigate } from "react-router-dom"
const Rules=()=>{
    const navigate=useNavigate();
    const startQuizHandler=()=>{
        const quizId = sessionStorage.getItem('categoryId')
        navigate(`/quiz/${quizId}`)
    }
    return (
        <div className="rules-outer-container">
            <div className="rules-conainer">
                <div className="paragraph-div">
                    <>
                        <h1>Quiz Rules</h1>
                        <p>1. There are 5 questions in total.</p>
                        <p>2. Each question carries one mark.</p>
                        <p>3. There won't be negative marking for wrong answer.</p>
                        <p>4. You won't be able to go back to previous questions after attempting so Please  do carefully.</p>
                        <p>5. Click Submit to complete the quiz.</p>
                    </>
                </div>
            </div>
            <div><button className="play-now-btn" onClick={startQuizHandler}>Start Quiz</button></div>
         </div>
    )
}
export {Rules}