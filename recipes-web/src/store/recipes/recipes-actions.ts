import {
  setCount,
  setRecipes,
  setRecipeById,
  removeRecipes,
} from "./recipes-slice";
import { setLoading } from "../ui/ui-slice";
import { showToast } from "../../helpers/toasts";
import { baseUrl } from "../../helpers/baseUrl";
import { AppDispatch } from "../index";
import { Recipe } from "../../types/recipe";
import { Response } from "../../types/response";

const URL = `${baseUrl}/api/v1/recipes`;

export const getRecipes = (pageNo: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const res = await fetch(`${URL}?page=${pageNo}`, {
      method: "GET",
      credentials: "include"
    });

    if (res.ok) {
      const data = await res.json();
      const count = res.headers.get("X-Total-Count");
      dispatch(setCount(Number(count)));
      dispatch(setRecipes(data));
      dispatch(setLoading(false));
    } else {
      const errData: Response = await res.json();
      showToast(errData.message, errData.status);
      dispatch(setLoading(false));
    }
  };
};

export const getRecipeById = (id: string, callback: any) => {
  return async (dispatch: AppDispatch) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
      credentials: "include"
    });
    if (res.status === 404) callback("/not-found");
    const data: Recipe = await res.json();
    const {
      title,
      category,
      about,
      description,
      ingredients,
      measurements,
      recipe_image,
    } = data;
    const recipeData = {
      title,
      category,
      about,
      description: description.join(", "),
      ingredients: ingredients.join(", "),
      measurements: measurements.join(", "),
      recipe_image,
    };
    dispatch(setRecipeById(recipeData));
  };
};

export const deleteRecipe = (id: number) => {
  return async (dispatch: AppDispatch) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(removeRecipes(id));
  };
};
