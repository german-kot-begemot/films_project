import React, { useState } from 'react';
import styles from './Categories.module.scss';
import { Film } from '../../../types/interfaces';
import Snow from '../Snow/Snow';

const Categories = () => {
  // const [movies, setMovies] = useState<Film[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.categoriesWrapper} data-testid='categories'>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <div className={styles.genreBlock} data-testid='genre'></div>
      <Snow />
    </div>
  );
};

export default Categories;
