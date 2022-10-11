import { createSlice } from "@reduxjs/toolkit";

type RecipeSearchInitState = {
  recipe: any,
  randomRecipe: {
    title?: string,
    img?: string
  },
  error: string
}

const initialState: RecipeSearchInitState = {
  recipe: {},
  randomRecipe: {},
  error: "",
};

const recipeSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.recipe = action.payload;
    },
    setRandomRecipe: (state, action) => {
      state.randomRecipe = action.payload;
    },
    reset: (state) => {
      state.recipe = {};
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRecipe, reset, setError, setRandomRecipe } =
  recipeSearchSlice.actions;

export default recipeSearchSlice.reducer;
