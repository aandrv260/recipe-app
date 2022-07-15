export type Recipe = {
  name: string;
  category: string;
  cookingTime: number;
  servings: number;
  ingredients: string[];
};

export type Recipes = Recipe[];

export type RecipesJSON = {
  data: { recipes: Recipes };
  status: number;
  results: number;
};
