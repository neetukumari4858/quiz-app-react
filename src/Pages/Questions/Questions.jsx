import React from "react";
import "./Questions.css";
import { useState } from "react";
import { quizQuestion } from "./data";
import { useQuiz } from "./../../Hooks/Context/quizContext";
import {BsArrowRightCircleFill} from "react-icons/bs"

function Questions() {
  const [ques, setQues] = useState(0);
  const quizId = sessionStorage.getItem("categoryId");
  const [optionToggle, setoptionToggle] = useState("");
  const {
    quizDispatch,
  } = useQuiz();
  const categoryQues = quizQuestion.find(
    (eachCategory) => eachCategory.categoryId === quizId
  );

  const categorymatch = quizQuestion.some(
    (eachCategory) => eachCategory.categoryId === quizId
  );
  const quesInCategory = categoryQues.questions;
  console.log(quesInCategory);

  const nextQuesHandler = () => {
    setQues(ques + 1);
    if (categorymatch) {
      console.log(quesInCategory[ques], "payload");
      quizDispatch({ type: "NEXT_QUES", payload: quesInCategory[ques] });
    } else {
      quizDispatch({ type: "NEXT_QUES", payload: [] });
    }
  };
  const optionHandler = (optionValue) => {
    setoptionToggle(optionValue);
  };
  return (
    <div className="question-section">
      <div className="content-container">
        <div className="outer-div">
          <div className="inner-div">
            <div className="Question-container">
              <h3>
                {`Question: ${ques + 1}/5`} <span>Score:0</span>
              </h3>
              <h2>{quesInCategory[ques].question}</h2>
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
              onClick={() => optionHandler(eachOption.value)}
            >
              {eachOption.value}
            </div>
          ))}
          <button className="btn" onClick={nextQuesHandler}>
            Next &nbsp; <i className="angleRight"><BsArrowRightCircleFill/></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Questions };
