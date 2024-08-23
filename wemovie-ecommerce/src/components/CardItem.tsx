import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  id: string;
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const MovieImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 4px;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 12px;
  color: #333;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;

const MoviePrice = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #2F2E41;
  text-align: center;
`;

const CardItem: React.FC<CartItemProps> = ({ id, image, title, price }) => {
  const [count, setCount] = useState(0);
  const { addItemToCart } = useCart(); 

  const handleAddToCart = () => {
    addItemToCart({ id, title, price, image }); 
    setCount(count + 1);
  };

  return (
    <Card>
      <MovieImage src={image} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MoviePrice>R${price.toFixed(2)}</MoviePrice>
      <Button 
        variant="card" 
        added={count > 0} 
        count={count} 
        onClick={handleAddToCart}
      >
        ADICIONAR AO CARRINHO {count > 0}
      </Button>
    </Card>
  );
};

export default CardItem;
