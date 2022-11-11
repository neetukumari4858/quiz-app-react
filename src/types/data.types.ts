
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

