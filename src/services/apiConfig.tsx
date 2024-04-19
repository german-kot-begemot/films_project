export const API_URL = 'https://api.themoviedb.org/3';
export const API_IMG = 'https://image.tmdb.org/t/p/w500';
export const API_TOP = `${API_URL}/movie/top_rated`;
// export const API_DETAILS = `${API_URL}/movie/{movie_id}`;
export const API_GENRES = `${API_URL}/genre/movie/list`;
export const API_GENRES_MOVIES = (genreId: number) =>
  `${API_URL}/discover/movie?with_genres=${genreId}`;
export const API_ID = (id: number) => `${API_URL}/find/${id}`;
export const API_DETAILS = (id: number) => `${API_URL}/movie/${id}`;
