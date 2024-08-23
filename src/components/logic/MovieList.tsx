import React from 'react';
import MovieCard from '../ui/MovieCard';
import { useMovies } from '../../hooks/useMovies';

const MovieList: React.FC = () => {
  const { movies, loading } = useMovies();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          price={movie.price}
          onAddToCart={() => {/* handle add to cart */}}
        />
      ))}
    </div>
  );
};

export default MovieList;
