
import "./CategoryCard.css";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  categoryId: string,
  categoryName: string,
  categoryImg: string
  categoryDescription: string
}
const CategoryCard = ({
  categoryId,
  categoryName,
  categoryImg,
  categoryDescription,
}: CategoryCardProps) => {
  const categoryCardHandler = (categoryId: string) => {
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
