import { addCSSClassName } from '../../assets/ts/generalFunctions';

// Styles
import scss from './Recipe.module.scss';

// Image (temporary)
import img from '../../images/img-1.jpg';

// Types
import { Recipe as RecipeType } from '../../types/RecipeAPI';

type Props = {
  recipe: RecipeType;
};

const Recipe: React.FC<Props> = props => {
  const { name } = props.recipe;

  return (
    <div className={addCSSClassName(scss, 'recipe')}>
      <img
        className={addCSSClassName(scss, 'recipe__img')}
        src={img}
        alt="Temporary placeholder img"
      />

      <h3 className={addCSSClassName(scss, 'recipe__heading')}>{name}</h3>
    </div>
  );
};

export default Recipe;
