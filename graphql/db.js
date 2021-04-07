import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = `${API_URL}/list_movies.json?`;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMoviesByGenre = (limit, genre) => {
  let REQUEST_URL = `${API_URL}/list_movies.json?`;
  REQUEST_URL += `genre=${genre}&sort_by=year`;
  if (limit > 0) {
    REQUEST_URL += `&limit=${limit}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
export const getMovie = (id) => {
  let REQUEST_URL = `${API_URL}/movie_details.json?movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};
