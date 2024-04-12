import React from 'react';
import styles from './Card.module.scss';
import { Film } from '../../../types/interfaces';

const Card = (props: Film) => {
  return (
    <div className={styles.card} data-testid='card'>
      <div className={styles.filmImg}>
        <img src={props.image} alt='pic' />
      </div>
      <div className={styles.filmName}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Card;
