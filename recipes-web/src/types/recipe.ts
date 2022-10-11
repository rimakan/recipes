export interface Recipe {
  id?: number;
  title?: string;
  category?: string;
  about?: string;
  description?: string[];
  ingredients?: string[];
  measurements?: string[];
  recipe_image?: string;
}

export interface RandomRecipe {
  title: string;
  recipe_image: string;
}
