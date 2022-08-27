import {quizStateType,QuizActionType} from "./../../types/data.types"

export const quizReducer = (quizState:quizStateType, quizAction:QuizActionType) => {
    switch (quizAction.type) {
      case 'SELECTED_OPTION':
        return {
          ...quizState,
          selectedOptions: quizAction.payload,
        }
      case 'CURRECT_ANS':
        return {
          ...quizState,
          rightAnsArr: [...quizState.rightAnsArr, quizAction.payload],
        }
      default:
        return quizState
    }
  }