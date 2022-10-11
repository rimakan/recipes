import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/HomePage";
import RecipesSearch from "../pages/RecipesSearch";
import YourRecipes from "../pages/YourRecipes";
import NewRecipePage from "../pages/NewRecipePage";
import EditRecipePage from "../pages/EditRecipePage";
import NotFoundPage from "../pages/NotFoundPage";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign_up" element={<Auth />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/search" element={<RecipesSearch />} />
      <Route
        path="/recipes"
        element={
          <PrivateRoute>
            <YourRecipes />
          </PrivateRoute>
        }
      />
      <Route
        path="/recipes/new"
        element={
          <PrivateRoute>
            <NewRecipePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/recipes/:id/edit"
        element={
          <PrivateRoute>
            <EditRecipePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
