import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Film } from '../../../types/interfaces';
import { findDetails, findVideo } from '../../../services/api';
import YouTube from 'react-youtube';

const CardDetails = () => {
  const params = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(params);

  useEffect(() => {
    const getTrailer = async () => {
      const key = await findVideo(+params.id!);
      setTrailerKey(key);
    };
    getTrailer();
  }, []);

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
      <div className={styles.filmName}>
        <h1>{film.name}</h1>
        <p>{film.description}</p>
        <button>Play trailer</button>
        {trailerKey && <YouTube videoId={trailerKey} />}
      </div>
      <div className={styles.filmImg}>
        <img src={film.image} alt='pic' />
      </div>
    </div>
  );
};

export default CardDetails;
