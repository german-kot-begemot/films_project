import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { Film, MovieDto } from '../../types/interfaces';
import { fetchAll, fetchTopMovie } from '../../services/api';
import Card from '../Films/Card/Card';
import { API_IMG } from '../../services/apiConfig';

const Carousel = () => {
  const [movies, setMovies] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const shuffleMovies = (results: Film[]) => {
    return [...results].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const findTopFilms = async () => {
      setIsLoading(true);
      try {
        const topMovies = await fetchTopMovie();
        const shuffledMovies = shuffleMovies(topMovies);
        setMovies(shuffledMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      setIsLoading(false);
    };
    findTopFilms();
  }, []);

  return (
    <div className={styles.wrapper} data-testid='topMovies'>
      {movies.slice(0, 5).map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          name={movie.name}
          description={movie.description}
          image={`${API_IMG}${movie.image}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
