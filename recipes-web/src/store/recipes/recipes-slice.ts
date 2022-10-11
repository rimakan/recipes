import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Recipe } from '../../types/recipe';

type RecipeInitState = {
  recipes: Recipe[],
  recipe: Recipe,
  count: number
}

const initialState: RecipeInitState = {
  recipes: [],
  recipe: {},
  count: 0,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setRecipeById: (state, action) => {
      state.recipe = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    removeRecipes: (state, action) => {
      const id = action.payload;
      state.recipes = state.recipes.filter((item: Recipe) => item.id !== id);
      state.count--;
      toast.success(`The recipe has been removed!`, {
        position: "bottom-right",
        hideProgressBar: true,
      });
    },
  },
});

export const { setRecipes, setRecipeById, setCount, removeRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
