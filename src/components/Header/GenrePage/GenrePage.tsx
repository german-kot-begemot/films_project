import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './GenrePage.module.scss';
import { Film } from '../../../types/interfaces';
import { GenrePageProps, genres } from '../../../types/types';
import Card from '../../Films/Card/Card';
import { findByGenres } from '../../../services/api';

const GenrePage = ({
  className,
  styles: customStyles,
  cardLimit,
}: GenrePageProps) => {
  const [movies, setMovies] = useState<Film[]>([]);
  const params = useParams<{ categoryId: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const movies = await findByGenres(+params.categoryId!);
      const randomMovies = movies
        .sort(() => Math.random() - 0.5)
        .slice(0, cardLimit);
      setMovies(randomMovies);
      setIsLoading(false);
    };
    getMovies();
  }, [params.categoryId, cardLimit]);

  const genre = genres.find(
    (genre) => genre.id === parseInt(params.categoryId!)
  );

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={customStyles}
      data-testid='genrePage'
    >
      <h1>{genre ? genre.name : 'Duck'}</h1>
      <div className={styles.movieHolder} data-testid='movieHolder'>
        {movies.map((film) => (
          <NavLink
            key={film.id}
            to={`/categories/${params.categoryId}/${film.id}`}
            className={styles.filmLink}
          >
            <Card
              id={film.id}
              name={film.name}
              description={film.description}
              image={film.image}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default GenrePage;
