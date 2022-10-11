import RecipeCard from "../UI/RecipeCard/RecipeCard";
import { Recipe } from "../../types/recipe";

type FilteredRecipesContentProps = {
  filteredRecipes?: any;
  onClick?: any;
};

const FilteredRecipesContent = ({
  filteredRecipes,
  onClick,
}: FilteredRecipesContentProps) => {
  return filteredRecipes.map((item: Recipe) => {
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

export default FilteredRecipesContent;
