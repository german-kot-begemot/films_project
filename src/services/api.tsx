import axios from 'axios';
import { Film, MovieDto } from '../types/interfaces';
import { API_ID, API_TOP, API_URL } from './apiConfig';

const mapToFilm = (movie: MovieDto): Film => ({
  id: movie.id,
  name: movie.title,
  description: movie.overview,
  image: movie.poster_path,
});

const fetchFilms = async <DataType,>(url: string): Promise<DataType> => {
  try {
    const response = await axios.get<DataType>(url, {
      params: { api_key: process.env.REACT_APP_MOVIE_API_KEY },
    });
    const films = response.data;
    console.log('Response: ', films);
    return films;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchAll = async () => {
  const allfilms = await fetchFilms<{ results: MovieDto[] }>(API_URL);
  return allfilms.results.map(mapToFilm);
};

export const fetchTopMovie = async () => {
  const allfilms = await fetchFilms<{ results: MovieDto[] }>(API_TOP);
  console.log(allfilms);
  return allfilms.results.map(mapToFilm);
};

// export const fetchGenres = async () => {
//   try {
//     const genresList = await axios.get<Genre[]>;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
