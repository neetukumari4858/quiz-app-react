import React from "react";
import "./CategoryCard.css";
import {QuizDatatype} from "./../../types/data.types";
import { Link } from "react-router-dom";
const CategoryCard: React.FC<QuizDatatype> = ({
  categoryId,
  categoryName,
  categoryImg,
  categoryDescription,
}) => {
  const categoryCardHandler = (categoryId:string) => {
    sessionStorage.setItem("categoryId", categoryId);
  };

  return (
    <div className="categories" onClick={() => categoryCardHandler(categoryId)}>
      <Link to="/RulesPage">
        <img className="images" src={categoryImg} alt="error" />
      </Link>
      <div className="text-div">
        <p className="paragraph">{categoryDescription}</p>
        <h1 className="button quizHeading-one">{categoryName}</h1>
      </div>
    </div>
  );
};

export { CategoryCard };
