import { addCSSClassName } from '../../assets/ts/generalFunctions';
import scss from './Header.module.scss';
import {
  Bookmark,
  BookmarkFill,
  PlusSquare,
  PlusSquareFill,
  ListCheck,
} from 'react-bootstrap-icons';
import React from 'react';
import { useState } from 'react';

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

const Header = () => {
  return (
    <header className={addCSSClassName(scss, 'header')}>
      {/* Logo to be put here later */}
      <h1 className="heading--primary">Recipify</h1>

      {/* Search form placeholder */}
      <form></form>

      {/* Icons */}
      <HeaderIcons />
    </header>
  );
};

export default Header;
