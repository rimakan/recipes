import { setLoading } from "../ui/ui-slice";
import { mealsDBUrl, mealsDBRandom } from "../../helpers/baseUrl";
import {
  setRecipe,
  setError,
  reset,
  setRandomRecipe,
} from "./recipe-search-slice";
import { Recipe } from "../../types/recipe";
import { AppDispatch } from "../index";

export const getRecipe = (query: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await fetch(`${mealsDBUrl}?s=${query}`);
      const data = await res.json();

      if (!data.meals) throw new Error(`The ${query} is (are) not found`);

      const meals = data.meals[0];

      const title = meals.strMeal;
      const about = `Delicious ${meals.strMeal} will not let you be hungry!`;
      const recipe_image = meals.strMealThumb;
      const category = meals.strCategory;

      // getting rid of duplicate values, splitting the recipe's instructions
      // and removing blank elements
      const description: any = [
        ...new Set(meals.strInstructions.split("\n")),
      ].filter((i: string) => i.length !== 1);

      const recipeValues = Object.values(meals);

      // getting the ingredients out of the api's object
      const ingrValues: any = recipeValues
        .slice(9)
        .filter((i) => i !== null && i !== " " && i !== "");

      if (ingrValues[ingrValues.length - 1].includes("http")) ingrValues.pop();

      const ingredientsValuesArrayLength = ingrValues.length / 2;

      // saving the ingredinets to the corresponding array

      const ingredients = ingrValues.slice(0, ingredientsValuesArrayLength);

      // getting the ingredient's measurements out of the ingredient's array
      // and storing those measurements in the array

      const measurements = ingrValues.slice(ingredientsValuesArrayLength);

      const recipeData: Recipe = {
        title,
        about,
        recipe_image,
        category,
        description,
        ingredients,
        measurements,
      };
      dispatch(setRecipe(recipeData));
      dispatch(setError(""));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(reset());
      dispatch(setError(err.message));
    }
  };
};

export const getRandomRecipe = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(mealsDBRandom);

      if (!res.ok) throw new Error('Random recipe is not available now');

      const data = await res.json();

      const randomMealData = data.meals[0];

      const title = randomMealData?.strMeal;
      const img = randomMealData?.strMealThumb;

      const randomMeal = { title, img };
      dispatch(setRandomRecipe(randomMeal));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
