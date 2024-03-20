import React, { useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {
  const [searchFilm, setSearchFilm] = useState('');

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      console.log('ok');
    }
  };

  return (
    <div className={styles.searchContent} data-testid='search'>
      <div>
        <input
          type='search'
          placeholder='Search'
          autoComplete='off'
          value={searchFilm}
          onChange={(event) => {
            setSearchFilm(event.target.value);
          }}
          onKeyDown={keyDownHandler}
        />
      </div>
    </div>
  );
};

export default Search;
