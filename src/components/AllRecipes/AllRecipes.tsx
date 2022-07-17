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
import LoaderSpinner from '../LoadingSpinner/LoadingSpinner';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes>([]);
  const [recipesLoading, setRecipesLoading] = useState<boolean>(false);
  console.log(recipes);

  useEffect(() => {
    const setData = async () => {
      try {
        setRecipesLoading(true);

        const { data } = await fetchRecipeData<RecipesJSON>('/recipes');
        setRecipes(data.recipes);

        setRecipesLoading(false);
      } catch (err: unknown) {
        handleAsyncAwaitErrors(err);
        setRecipesLoading(false);
      }
    };

    setData();
  }, []);

  const ShowRecipes = () => {
    return recipesLoading ? (
      <LoaderSpinner />
    ) : (
      <>
        {recipes.map(recipe => (
          <Recipe recipe={recipe} key={generateID()} />
        ))}
      </>
    );
  };

  return (
    <div
      className={addCSSClassName(
        scss,
        'all-recipes',
        'grid',
        `grid--${recipesLoading ? '1-col' : '4-cols'}`
      )}
    >
      {/* {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))}

      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))}

      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={generateID()} />
      ))} */}
      <ShowRecipes />
      <ShowRecipes />
      <ShowRecipes />
    </div>
  );
};

export default AllRecipes;
