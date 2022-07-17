// Package
import React from 'react';

// Components
import Search from '../Search/Search';
import HeaderIcons from './HeaderIcons';

// Functions
import { addCSSClassName } from '../../assets/ts/generalFunctions';

// Styles
import scss from './Header.module.scss';

const Header = () => {
  return (
    <header className={addCSSClassName(scss, 'header')}>
      {/* Logo to be put here later */}
      <h1 className="heading--primary">Recipify</h1>

      {/* Search form placeholder */}
      <Search />

      {/* Icons */}
      <HeaderIcons />
    </header>
  );
};

export default Header;
