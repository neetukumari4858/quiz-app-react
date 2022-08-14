import React from "react";
import "./Questions.css";
import { useState } from "react";
import { useQuiz } from "../../Hooks/Context/quizContext";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { quizQuestion } from "./data";

function Questions() {
  const [ques, setQues] = useState(0);
  const quizId = sessionStorage.getItem("categoryId");
  const [optionToggle, setoptionToggle] = useState("");
  const {
    quizState: { selectedOptions },
    quizDispatch,
  } = useQuiz();
  const categoryQues = quizQuestion.find(
    (eachCategory) => eachCategory.categoryId === quizId
  );

  const quesInCategory = categoryQues.questions;

  const nextQuesHandler = () => {
    setQues(ques + 1);
  };
  const optionHandler = (optionValue, eachOption) => {
    setoptionToggle(optionValue);
    selectedOptions[ques] = optionValue;
    quizDispatch({ type: "SELECTED_OPTION", payload: [...selectedOptions] });
    if (eachOption.isRight) {
      quizDispatch({ type: "CURRECT_ANS", payload: eachOption.value });
    }
  };
  return (
    <div className="question-section">
      <div className="outer-div">
        <div className="inner-div">
          <div className="Question-container">
            <h3>
              {`Question: ${ques + 1}/5`} 
            </h3>
            <h2>{`Q${ques + 1}: ${quesInCategory[ques].question}`}</h2>
          </div>
          <br />
        </div>
      </div>
      <div className="options">
        {quesInCategory[ques].options.map((eachOption) => (
          <div
            className={`each_option ${
              optionToggle === eachOption.value
                ? "selectedOption"
                : "each_option"
            }`}
            key={eachOption.value}
            onClick={() => optionHandler(eachOption.value, eachOption)}
          >
            {eachOption.value}
          </div>
        ))}
        <div>
          {ques === 4 ? (
            <Link to="/ResultPage">
              <button className="viewScorebtn bg-white">
                View Result&nbsp;&nbsp;
                <i className="angleRight">
                  <BsArrowRightCircleFill />
                </i>
              </button>
            </Link>
          ) : (
            <button className="btn bg-white" onClick={nextQuesHandler}>
              Next &nbsp;
              <i className="angleRight">
                <BsArrowRightCircleFill />
              </i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { Questions };
