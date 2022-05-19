import React from "react";
import "./Result.css";
import { useQuiz } from "../../Hooks/Context/quizContext";
import { quizQuestion } from "../Questions/data";

const Result = () => {
  const quizId = sessionStorage.getItem("categoryId");
  const correctOptions = quizQuestion.find(
    (category) => category.categoryId === quizId
  );
  const {
    quizState: { rightAnsArr, selectedOptions },
  } = useQuiz();
  const checkAnswer = (optionValue, index) => {
    if (selectedOptions[index]) {
      if (selectedOptions[index] === optionValue) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <div className="result-outer-container">
      <div className="result-content-container">
        <div className="result-Question-container">
          <div className="result-inner-div">
            <h2> Your Result</h2>
            <h3>{`Question:${correctOptions.questions.length}/${correctOptions.questions.length}`}</h3>

            <h2>
              {`${
                rightAnsArr.length * 10 > 20
                  ? "Congratulation! 🎉 Your final score is :"
                  : "Oops! Better luck next time ☹️ Your final Score is :"
              } ${rightAnsArr.length * 10}/${
                correctOptions.questions.length * 10
              }`}
            </h2>
          </div>
          <div className="quetionAndAnswerDiv">
            {correctOptions.questions.map((eachQuestion, index) => {
              return (
                <div key={eachQuestion.question}>
                  <h2>{`Q.${index + 1}: ${eachQuestion.question}`}</h2>
                  <div className="result-options ">
                    {eachQuestion.options.map((eachOption) => {
                      return (
                        <div
                          key={eachOption.value}
                          className={` resultOptions ${
                            eachOption.isRight && "correct_option"
                          } ${
                            checkAnswer(eachOption.value, index, eachOption) &&
                            !eachOption.isRight
                              ? "wrong_option"
                              : ""
                          } `}
                        >
                          {eachOption.value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Result };
