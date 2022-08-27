

export type options = {
  value: string;
  isRight: boolean;
};
export type questions = {
  question: string;
  points: number;
  options: options[];
};
export type QuizDatatype = {
  categoryId: string;
  categoryName: string;
  categoryImg: string;
  categoryDescription: string;
  // questions:questions[]
};

// 

export type quizStateType={
  score:number,
  rightAnsArr:string[],
  selectedOptions:string[],  
}

export type QuizActionType={
  type:"SELECTED_OPTION",
  payload:string
}|
{
  type:"CURRECT_ANS",
  payload:string
}

export type QuizContextType={
  quizState:quizStateType,
  quizDispatch:(arg0: QuizActionType) => void
}