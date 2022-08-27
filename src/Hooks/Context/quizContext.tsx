import { createContext, useContext, useReducer } from "react";
import {reactChildren} from "./../../types/common.types";
import {quizReducer} from "../Reducer/quizReducer"
import {quizStateType}  from "./../../types/data.types"
import {QuizContextType} from "./../../types/data.types"

const quizContext=createContext<QuizContextType>({} as QuizContextType)
const useQuiz=()=>useContext(quizContext)

const QuizProvider=({children}:reactChildren)=>{
    const initialState: quizStateType={
        score:0,
        rightAnsArr:[],
        selectedOptions: [],  
    }
    const [quizState,quizDispatch]=useReducer(quizReducer,initialState)
    return (
        <quizContext.Provider value={{quizState,quizDispatch}}>{children}</quizContext.Provider>
    )
}
export {useQuiz,QuizProvider}
