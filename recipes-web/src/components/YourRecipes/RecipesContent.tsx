import RecipeCard from "../UI/RecipeCard/RecipeCard";
import { Recipe } from "../../types/recipe";

type RecipesContentProps = {
  recipes: any;
  onClick: any;
};

const RecipesContent = ({ recipes, onClick }: RecipesContentProps) => {
  return recipes.map((item: Recipe) => {
    const { id, recipe_image, title, category, about } = item;
    return (
      <RecipeCard
        key={id || ""}
        src={recipe_image || ""}
        alt={`the recipe of ${title || ""}`}
        title={title || ""}
        category={category || ""}
        about={about || ""}
        onClick={() => onClick(id)}
      />
    );
  });
};

export default RecipesContent;
