
export type Option = {
  value: string,
  isRight: boolean
}

export type Question = {
  question: string,
  points: number,
  options: Option[]
}

export type QuizQuestion = {
  categoryId: string,
  categoryName: string,
  categoryImg: string,
  questions: Question[],
  categoryDescription: string
} |
{
  categoryId: string,
  categoryName: string,
  categoryImg: string,
  questions: any,
  categoryDescription: string
}

// quizContext type

export type quizStateType = {
  score:number,
  rightAnsArr: any[],
  selectedOptions: object[],
}

export type QuizActionType = {
  type: "SELECTED_OPTION",
  payload: Option[];
} |
{
  type: "CURRECT_ANS",
  payload: string
}

export type QuizContextType = {
  quizState: quizStateType,
  quizDispatch: (arg0: QuizActionType) => void
}