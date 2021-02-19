const movies = [
  {
    id: 1,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 2,
    name: "Avengers",
    score: 8,
  },
    {
    id: 3,
    name: "The Godfather",
    score: 99,
  },
    {
    id: 4,
    name: "Logan",
    score: 2,
  }
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterMovie = movies.filter((movie) => movie.id === id);
  return filterMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovie = movies.filter((movie) => movie.id !== id);
  if(movies.length > cleanedMovie.length){
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
}
