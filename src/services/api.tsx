import axios from 'axios';
import { Film, MovieDto } from '../types/interfaces';
import {
  API_ID,
  API_TOP,
  API_URL,
  API_GENRES_MOVIES,
  API_IMG,
  API_DETAILS,
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
  return allfilms.results.map(mapToFilm);
};

export const findByGenres = async (genreId: number) => {
  try {
    const genresList = await fetchFilms<{ results: MovieDto[] }>(
      API_GENRES_MOVIES(genreId)
    );
    return genresList.results.map(mapToFilm);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findById = async (id: number) => {
  try {
    const films = await fetchFilms<{ movie_results: MovieDto[] }>(API_ID(id));
    const film = films.movie_results.find((movie) => movie.id === id);
    if (film) {
      return mapToFilm(film);
    } else {
      throw new Error(`Film with id ${id} not found`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findDetails = async (id: number) => {
  try {
    const exactFilm = await fetchFilms<MovieDto>(API_DETAILS(id));
    return mapToFilm(exactFilm);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
