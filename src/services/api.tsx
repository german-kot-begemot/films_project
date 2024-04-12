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

// const fetchFilms = async (url: string) => {
//   try {
//     const response = await axios.get<{ results: MovieDto[] }>(url, {
//       params: { api_key: process.env.REACT_APP_MOVIE_API_KEY },
//     });
//     const films = response.data.results.map(mapToFilm);
//     console.log('Response: ', films);
//     return films;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const fetchAll = async () => {
  const allfilms = await fetchFilms<{ results: MovieDto[] }>(API_URL);
  return allfilms.results.map(mapToFilm);
};

export const fetchTop = async () => {
  const allfilms = await fetchFilms<{ results: MovieDto[] }>(API_TOP);
  console.log(allfilms);
  return allfilms.results.map(mapToFilm);
};

// export const fetchImg = async (): Promise<Film[]> => {
//   const img = await fetchFilms<string>(API_ID);
//   return fetchFilms(API_ID);
// };
