import React, { useEffect, useState } from 'react';
import { fetchRecipeData } from './assets/ts/api';
import { Recipes, RecipesJSON } from './types/RecipeAPI';
import { handleAsyncAwaitErrors } from './assets/ts/tryCatch';

const App = () => {
  const [recipes, setRecipes] = useState<Recipes>([]);
  console.log(recipes);

  useEffect(() => {
    const setData = async () => {
      try {
        const { data } = await fetchRecipeData<RecipesJSON>('/recipes');
        setRecipes(data.recipes);
      } catch (err: unknown) {
        handleAsyncAwaitErrors(err);
      }
    };

    setData();
  }, []);
  return <div>Home Page</div>;
};

export default App;
