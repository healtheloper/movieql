import { getMovies, getMovie, getMoviesByGenre } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movies_genre: (_, { limit, genre }) => getMoviesByGenre(limit, genre),
    movie: (_, { id }) => getMovie(id),
  },
};

export default resolvers;
