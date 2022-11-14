import { createContext, useContext, useReducer } from "react";
import { reactChildren } from "./../../types/common.types";
import { quizReducer } from "../Reducer/quizReducer"
import { QuizContextType, quizStateType } from "./../../types/quizContextType"

const quizContext = createContext({} as QuizContextType)
const useQuiz = () => useContext(quizContext)

const QuizProvider = ({ children }: reactChildren) => {
    const initialState: quizStateType = {
        rightAnsArr: [],
        selectedOptions: [],
    }
    const [quizState, quizDispatch] = useReducer(quizReducer, initialState)
    return (
        <quizContext.Provider value={{ quizState, quizDispatch }}>{children}</quizContext.Provider>
    )
}
export { useQuiz, QuizProvider }
