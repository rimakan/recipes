import { baseUrl } from "./baseUrl";
import { showToast } from "./toasts";
import { setLoading } from "../store/ui/ui-slice";
import { Response } from "../types/response";
import { setError } from "../store/recipeSearch/recipe-search-slice";
import { reset } from "../store/recipeSearch/recipe-search-slice";
import { setModal } from "../store/ui/ui-slice";
import { AppDispatch } from "../store";

export const saveRecipeRequest = async (
  recipe_image: any,
  ingredients: string[],
  measurements: string[],
  description: string[],
  title: string,
  category: string,
  about: string,
  dispatch: AppDispatch,
  navigate: any
) => {
  const URL = `${baseUrl}/api/v1/recipes`;

  const recipeImage = await fetch(recipe_image).then((r) => r.blob());
  const newIngredients = ingredients?.join(", ") || "";
  const newMeasurements = measurements?.join(", ") || "";
  const newDescription = description?.join(";") || "";

  const formData = new FormData();
  formData.append("title", title);
  formData.append("category", category);
  formData.append("about", about);
  formData.append("description", newDescription);
  formData.append("ingredients", newIngredients);
  formData.append("measurements", newMeasurements);
  formData.append("recipe_image", recipeImage);

  dispatch(setLoading(true));
  const res = await fetch(URL, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(reset());
    dispatch(setModal(false));
    navigate("/recipes");
    showToast(data.message, data.status);
    dispatch(setLoading(false));
  } else {
    const err: Response = await res.json();
    dispatch(setLoading(false));
    setError(err.message);
    showToast(err.message, err.status);
  }
};
