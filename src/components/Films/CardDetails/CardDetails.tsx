import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Film } from '../../../types/interfaces';
import { findDetails } from '../../../services/api';

const CardDetails = () => {
  const params = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(params);

  useEffect(() => {
    const getFilmDetails = async () => {
      setIsLoading(true);
      const exactFilm = await findDetails(+params.id!);
      setFilm(exactFilm);
      setIsLoading(false);
    };
    getFilmDetails();
  }, []);

  if (film === null) {
    return null;
  }

  return (
    <div className={styles.detailsWrapper} data-testid='details-wrapper'>
      <div className={styles.filmImg}>
        <img src={film.image} alt='pic' />
      </div>
      <div className={styles.filmName}>
        <h1>{film.name}</h1>
      </div>
      <div className={styles.filmDescription}>
        <h1>{film.description}</h1>
      </div>
    </div>
  );
};

export default CardDetails;
