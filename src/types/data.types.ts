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
