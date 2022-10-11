import { RootState } from "../index";

export const recipesSelector = (state: RootState) => state.recipes.recipes;

export const recipeSelector = (state: RootState) => state.recipes.recipe;

export const countSelector = (state: RootState) => state.recipes.count;
