import axios from 'axios';
import { Film, MovieDto } from '../types/interfaces';
import {
  API_ID,
  API_TOP,
  API_URL,
  API_GENRES_MOVIES,
  API_IMG,
} from './apiConfig';

const mapToFilm = (movie: MovieDto): Film => ({
  id: movie.id,
  name: movie.title,
  description: movie.overview,
  image: `${API_IMG}${movie.poster_path}`,
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

export const findByGenres = async (genreId: number) => {
  try {
    const genresList = await fetchFilms<{ results: MovieDto[] }>(
      API_GENRES_MOVIES(genreId)
    );
    console.log(genresList);
    return genresList.results.map(mapToFilm);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchImagesByMovieId = async (movieId: number) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/images`, {
      params: { api_key: process.env.REACT_APP_MOVIE_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images by movie ID:', error);
    throw error;
  }
};
