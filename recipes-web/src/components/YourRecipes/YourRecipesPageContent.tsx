import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe, getRecipes } from "../../store/recipes/recipes-actions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setModal } from "../../store/ui/ui-slice";
import {
  countSelector,
  recipesSelector,
} from "../../store/recipes/recipes-selectors";
import { Recipe } from "../../types/recipe";
import { AppDispatch } from "../../store";
import { loadingSelector, modalSelector } from "../../store/ui/ui-selectors";
import styles from "./YourRecipes.module.css";
import ModalContent from "../common/ModalContent/ModalContent";
import Modal from "../UI/Modal/Modal";
import Loader from "../UI/Loader/Loader";
import Button from "../UI/Button/Button";
import RemoveButton from "../UI/Button/RemoveButton";
import Paginator from "../UI/Paginator/Paginator";
import Filter from "../UI/Filter/Filter";
import RecipesContent from "./RecipesContent";
import FilteredRecipesContent from "./FilteredRecipesContent";

const YourRecipesPageContent = () => {
  const recipes = useSelector(recipesSelector);
  const count = useSelector(countSelector);
  const isLoading = useSelector(loadingSelector);
  const modal = useSelector(modalSelector);
  const dispatch: AppDispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("All");
  const [id, setId] = useState(null);
  const [page, setPage] = useState(1);

  const pagesQty = Math.ceil(count / 4);

  useEffect(() => {
    dispatch(getRecipes(page));
  }, [dispatch, page]);

  const openModal = (id: number) => {
    dispatch(setModal(true));
    setId(id);
  };

  const closeModal = () => dispatch(setModal(false));

  const deleteHandler = (id: number) => {
    if (count % 2 === 0 || count % 3 === 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
    dispatch(deleteRecipe(id));
    dispatch(setModal(false));
    setSelectedValue("All");
  };

  const categoriesList = recipes.map((i) => i.category);
  const categories = [...new Set(categoriesList)];

  const filterHandler = (selectedCategory: string) => {
    setSelectedValue(selectedCategory);
  };

  const filteredRecipes = recipes.filter((i) => i.category === selectedValue);

  return (
    <section className={styles["recipes-page"]}>
      <header className={styles["recipes-page__header"]}>
        <h2 className={styles["recipes-page__header-text"]}>
          Find your recipes here!
        </h2>
      </header>
      {isLoading && <Loader />}
      {!isLoading && (
        <Filter
          categories={categories}
          onChange={filterHandler}
          selected={selectedValue}
        />
      )}
      {!isLoading && (
        <div className={styles["recipes__container"]}>
          {selectedValue === "All" ? (
            <RecipesContent recipes={recipes} onClick={openModal} />
          ) : (
            <FilteredRecipesContent
              filteredRecipes={filteredRecipes}
              onClick={openModal}
            />
          )}
          {modal && (
            <Modal onClick={closeModal}>
              {recipes
                .filter((item) => item.id === id)
                .map((item: Recipe) => {
                  const { id, title, ingredients, measurements, description } =
                    item;
                  return (
                    <ModalContent
                      key={id || ""}
                      title={title || ""}
                      ingredients={ingredients || []}
                      measurements={measurements || []}
                      steps={description || []}
                    >
                      <div className={styles["recipe__actions"]}>
                        <Link
                          to={`/recipes/${id}/edit`}
                          style={{ textDecoration: "none", color: "#333" }}
                        >
                          <Button>Edit Recipe</Button>
                        </Link>
                        <RemoveButton removeRecipe={() => deleteHandler(id)}>
                          Remove Recipe
                        </RemoveButton>
                      </div>
                    </ModalContent>
                  );
                })}
            </Modal>
          )}
        </div>
      )}
      {recipes.length > 0 && (
        <Paginator
          page={page}
          onChange={(_, value: number) => setPage(value)}
          count={pagesQty}
        />
      )}
    </section>
  );
};

export default YourRecipesPageContent;
