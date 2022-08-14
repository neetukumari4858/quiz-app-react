export const quizReducer = (quizState, quizAction) => {
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