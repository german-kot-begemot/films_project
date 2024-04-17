import React, { useState } from 'react';
import styles from './Categories.module.scss';
import { Film } from '../../../types/interfaces';
import Snow from '../Snow/Snow';

const Categories = () => {
  // const [movies, setMovies] = useState<Film[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.categoriesWrapper} data-testid='categories'>
      <Snow />
      <div className={styles.blocksHolder}>
        <div
          className={`${styles.genreBlock} ${styles.block1}`}
          data-testid='genre'
        >
          <h1>Action</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block2}`}
          data-testid='genre'
        >
          <h1>Adventure</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block3}`}
          data-testid='genre'
        >
          <h1>Comedy</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block4}`}
          data-testid='genre'
        >
          <h1>Crime</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block5}`}
          data-testid='genre'
        >
          <h1>Drama</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block6}`}
          data-testid='genre'
        >
          <h1>Fantasy</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block7}`}
          data-testid='genre'
        >
          <h1>Horror</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block8}`}
          data-testid='genre'
        >
          <h1>Mystery</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block9}`}
          data-testid='genre'
        >
          <h1>Romance</h1>
        </div>
        <div
          className={`${styles.genreBlock} ${styles.block10}`}
          data-testid='genre'
        >
          <h1>Thriller</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
