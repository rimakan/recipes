import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import recipeSearchSlice from "./recipeSearch/recipe-search-slice";
import recipesSlice from "./recipes/recipes-slice";
import uiSlice from "./ui/ui-slice";
import userSlice from "./user/user-slice";

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    recipeSearch: recipeSearchSlice,
    ui: uiSlice,
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
