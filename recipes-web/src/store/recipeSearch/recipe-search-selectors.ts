import { RootState } from "../index";

export const recipeSelector = (state: RootState) => state.recipeSearch.recipe;

export const randomRecipeSelector = (state: RootState) => state.recipeSearch.randomRecipe;

export const errorSelector = (state: RootState) => state.recipeSearch.error;
