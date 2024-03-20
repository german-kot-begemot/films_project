import React, { useState } from 'react';
import styles from './MyMovie.module.scss';

const MyMovie = () => {
  return <div className={styles.myMovie} data-testid='my-movie'></div>;
};

export default MyMovie;
