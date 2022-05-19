export const quizReducer = (quizState, quizAction) => {
    switch (quizAction.type) {
      case 'NEXT_QUES':
        return {
          ...quizState,
          selectedQuestion: [...quizState.selectedQuestion, quizAction.payload],
        }
      default:
        return quizState
    }
  }