import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Film } from '../../../types/interfaces';
import { findDetails, findVideo } from '../../../services/api';
import YouTube from 'react-youtube';
import Button from '../../Button/Button';
import GenrePage from '../../Header/GenrePage/GenrePage';

const CardDetails = () => {
  const params = useParams<{ id: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const handlePlayTrailer = async () => {
    try {
      const key = await findVideo(+params.id!);
      setTrailerKey(key);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  if (film === null) {
    return null;
  }

  return (
    <>
      <div className={styles.detailsWrapper} data-testid='details-wrapper'>
        <div className={styles.filmName}>
          <h1>{film.name}</h1>
          <p>{film.description}</p>
          <div>
            <h2>Release date:</h2>
            <p>{film.release_date}</p>
          </div>
          <div>
            <h2>Rating:</h2>
            <p>{Math.round(+film.vote_average!)}</p>
          </div>
          <Button nameBtn='Play trailer' onClickHandler={handlePlayTrailer} />
          {trailerKey && (
            <YouTube videoId={trailerKey} className={styles.youtubePlayer} />
          )}
        </div>
        <div className={styles.filmImg}>
          <img src={film.image} alt='pic' />
        </div>
      </div>
      <GenrePage
        className={styles.genreInCardDetails}
        cardLimit={5}
        // styles={{ height: '200px' }}
      />
    </>
  );
};

export default CardDetails;
