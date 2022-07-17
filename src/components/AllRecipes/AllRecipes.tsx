// Packages
import { useEffect, useState } from 'react';

// Functions
import { addCSSClassName, generateID } from '../../assets/ts/generalFunctions';
import { fetchRecipeData } from '../../assets/ts/api';
import { handleAsyncAwaitErrors } from '../../assets/ts/tryCatch';

// Types
import { Recipes, RecipesJSON } from '../../types/RecipeAPI';

// Styles
import scss from './AllRecipes.module.scss';
import Recipe from '../Recipe/Recipe';

const AllRecipes = () => {
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
    <div className={addCSSClassName(scss, 'all-recipes', 'grid', 'grid--4-cols')}>
      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))}

      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))}

      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))}
    </div>
  );
};

export default AllRecipes;
