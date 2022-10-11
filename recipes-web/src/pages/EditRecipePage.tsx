import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById } from "../store/recipes/recipes-actions";
import { recipeSelector } from "../store/recipes/recipes-selectors";
import { AppDispatch } from "../store";
import { Recipe } from "../types/recipe";
import RecipeForm from "../components/Form/RecipeForm";

const EditRecipePage = () => {
  const { id } = useParams();
  const recipe: Recipe = useSelector(recipeSelector);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { title, description, category, measurements, ingredients, about } = recipe;

  useEffect(() => {
    dispatch(getRecipeById(id, navigate));
  }, [dispatch, id, navigate]);

  return (
    <RecipeForm
      title={title || ""}
      category={category || ""}
      description={description || ""}
      measurements={measurements || ""}
      ingredients={ingredients || ""}
      about={about || ""}
    />
  );
};

export default EditRecipePage;
