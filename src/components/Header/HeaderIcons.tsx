// Components
import { Bookmark, ListCheck, PlusSquare } from 'react-bootstrap-icons';

// Functions
import { addCSSClassName } from '../../assets/ts/generalFunctions';

// Styles
import scss from './Header.module.scss';

const HeaderIcons = () => {
  return (
    <div className={addCSSClassName(scss, 'header__icons')}>
      <PlusSquare
        className={addCSSClassName(
          scss,
          'header__icon',
          addCSSClassName(scss, 'header__icon--plus')
        )}
      />

      <Bookmark
        className={addCSSClassName(
          scss,
          'header__icon',
          addCSSClassName(scss, 'header__icon--bookmark')
        )}
      />

      <ListCheck
        className={addCSSClassName(
          scss,
          'header__icon',
          addCSSClassName(scss, 'header__icon--list')
        )}
      />
    </div>
  );
};

export default HeaderIcons;
