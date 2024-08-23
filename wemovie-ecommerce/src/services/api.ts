import { Movie } from '../hooks/useMovies';

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch('https://wefit-movies.vercel.app/api/movies');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.products;
};
