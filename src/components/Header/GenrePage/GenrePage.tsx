import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './GenrePage.module.scss';
import { Film } from '../../../types/interfaces';
import { fetchImagesByMovieId, findByGenres } from '../../../services/api';
import { genres } from '../../../types/types';
import Card from '../../Films/Card/Card';

const GenrePage = () => {
  const [movies, setMovies] = useState<Film[]>([]);
  const params = useParams<{ categoryId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  console.log(params);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const movies = await findByGenres(+params.categoryId!);
      setMovies(movies);
      setIsLoading(false);
    };
    getMovies();
  }, [params.categoryId]);

  const genre = genres.find(
    (genre) => genre.id === parseInt(params.categoryId!)
  );

  return (
    <div className={styles.wrapper} data-testid='genrePage'>
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
