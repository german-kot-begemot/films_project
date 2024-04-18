export const API_URL = 'https://api.themoviedb.org/3';
export const API_TOP = `${API_URL}/movie/top_rated`;
// export const API_IMG = `${API_URL}/movie/{movie_id}/images`;
export const API_DETAILS = `${API_URL}/movie/{movie_id}`;
export const API_GENRES = `${API_URL}/genre/movie/list`;
export const API_GENRES_MOVIES = (genreId: number) =>
  `${API_URL}/discover/movie?with_genres=${genreId}`;
//   `${API_URL}/discover/movie?api_key=MY_API_KEY&with_genres=${genreId}`;
export const API_ID = `${API_URL}/find/{external_id}`;
export const API_IMG = 'https://image.tmdb.org/t/p/w500';
