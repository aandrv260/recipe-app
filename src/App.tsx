import React, { useEffect, useState } from 'react';
import { fetchRecipeData } from './assets/ts/api';
import { Recipes, RecipesJSON } from './types/RecipeAPI';
import { handleAsyncAwaitErrors } from './assets/ts/tryCatch';
import Header from './components/Header/Header';
import Link from './components/Link/Link';

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

  return (
    <div className="container">
      <Header />
      <Link href="#">Link &rarr;</Link>
    </div>
  );
};

export default App;
