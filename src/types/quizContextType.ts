
export type Option = {
    value: string,
    isRight: boolean
}

export type quizStateType = {
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