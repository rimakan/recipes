import styles from "./FourthSection.module.css";
import { getRecipe } from "../../../store/recipeSearch/recipe-search-actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { errorSelector } from "../../../store/recipeSearch/recipe-search-selectors";
import Error from "../../common/Error/Error";

interface FourthSectionProps  {
  title: string;
  src: string;
  alt: string;
};

const FourthSection = ({ title, src, alt }: FourthSectionProps) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const error = useSelector(errorSelector);
  const searchRandomRecipe = (e: any) => {
    e.preventDefault();
    dispatch(getRecipe(e.target.innerText));
    navigate("/search");
  };
  return (
    <section className={styles["recipes__random-recipe"]}>
      {error && <Error>{error}</Error>}
      {!error && (
        <div className={styles["random-recipe"]}>
          <div className={styles["recipes__descr-container"]}>
            <h2 className={styles["recipes__description"]}>
              Recipe of the day
            </h2>
            <p
              className={styles["recipes__meal-title"]}
              onClick={searchRandomRecipe}
            >
              {title}
            </p>
          </div>
          <div className={styles["recipes__img-container"]}>
            <img
              className={styles["recipes__random-recipe-img"]}
              src={src}
              alt={alt}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FourthSection;
