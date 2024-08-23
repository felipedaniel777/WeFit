import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

export interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
}

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };
  
    loadMovies();
  }, []);

  return { movies, loading, error };
};
