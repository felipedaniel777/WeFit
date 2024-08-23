import React from 'react';
import styled from 'styled-components';

interface MovieCardProps {
  title: string;
  price: number;
  onAddToCart: () => void;
}

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const MovieCard: React.FC<MovieCardProps> = ({ title, price, onAddToCart }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </Card>
  );
};

export default MovieCard;