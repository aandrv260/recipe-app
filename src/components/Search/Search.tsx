import React, { useState } from 'react';
import { addCSSClassName } from '../../assets/ts/generalFunctions';
import Button from '../Button/Button';
import scss from './Search.module.scss';

const Search = () => {
  const [query, setQuery] = useState<string>('');

  const searchChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setQuery(value);
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className={addCSSClassName(scss, 'search-form')}
    >
      <input
        className={addCSSClassName(scss, 'search-form__input')}
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={searchChangeHandler}
      />
    </form>
  );
};

export default Search;
