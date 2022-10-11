import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../store/recipeSearch/recipe-search-slice";
import { getRecipe } from "../../store/recipeSearch/recipe-search-actions";
import { setModal } from "../../store/ui/ui-slice";
import {
  recipeSelector,
  errorSelector,
} from "../../store/recipeSearch/recipe-search-selectors";
import { isLoggedInSelector } from "../../store/auth/auth-selectors";
import { loadingSelector, modalSelector } from "../../store/ui/ui-selectors";
import { AppDispatch } from "../../store";
import styles from "./RecipesSearch.module.css";
import Error from "../common/Error/Error";
import Modal from "../UI/Modal/Modal";
import RecipeCard from "../UI/RecipeCard/RecipeCard";
import ModalContent from "../common/ModalContent/ModalContent";
import Loader from "../UI/Loader/Loader";
import Button from "../UI/Button/Button";
import { saveRecipeRequest } from "../../helpers/saveRecipeRequest";

const RecipesSearchPageContent = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipe = useSelector(recipeSelector);
  const searchError = useSelector(errorSelector);
  const isLoading = useSelector(loadingSelector);
  const modal = useSelector(modalSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);

  const {
    title,
    about,
    recipe_image,
    description,
    ingredients,
    measurements,
    category,
  } = recipe;

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const inputHandler = (e: any) => setValue(e.target.value);

  const openModal = () => dispatch(setModal(true));

  const closeModal = () => dispatch(setModal(false));

  const isErrorPresent = error.length > 0;

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(getRecipe(value));
    dispatch(reset());
    setValue("");
    setError("");
  };

  const saveHandler = () => saveRecipeRequest(
    recipe_image,
    ingredients,
    measurements,
    description,
    title,
    category,
    about,
    dispatch,
    navigate
  );

  const recipeKeys = Object.keys(recipe);

  return (
    <>
      <section className={styles["recipe__search"]}>
        <div className={styles["recipe__actions"]}>
          <input
            className={styles["recipe__input"]}
            onChange={inputHandler}
            value={value}
            placeholder="Enter your meal"
          />
          <button
            className={styles["recipe__search-btn"]}
            onClick={submitHandler}
            disabled={!value}
          >
            Search
          </button>
        </div>
        {searchError && <Error>{searchError}</Error>}
        {isLoading && <Loader />}
        {recipeKeys.length !== 0 && (
          <div className={styles["recipe__result"]}>
            <RecipeCard
              src={recipe_image || ""}
              alt={title || ""}
              title={title || ""}
              category={category || ""}
              about={about || ""}
              onClick={openModal}
            />
            {modal && (
              <Modal onClick={closeModal}>
                <ModalContent
                  title={title || ""}
                  ingredients={ingredients || ""}
                  measurements={measurements || ""}
                  steps={description || ""}
                >
                  {isLoggedIn && (
                    <Button
                      onSave={saveHandler}
                      disabled={isErrorPresent || isLoading}
                    >
                      {isLoading ? "Saving recipe..." : "Save Recipe"}
                    </Button>
                  )}
                </ModalContent>
              </Modal>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default RecipesSearchPageContent;
