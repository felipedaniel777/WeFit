import React from 'react';
import styled from 'styled-components';
import { useMovies } from '../hooks/useMovies';
import CardItem from '../components/CardItem';
import LoadState from '../components/LoadState';
import EmptyState from "../components/EmptyState";

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0px 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Home: React.FC = () => {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <LoadState />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(movies) || movies.length === 0) {
    return <EmptyState message="Parece que não há filmes disponíveis no momento." />;
  }

  return (
    <MoviesGrid>
      {movies.map(movie => (
        <CardItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          price={movie.price}
        />
      ))}
    </MoviesGrid>
  );
};

export default Home;
