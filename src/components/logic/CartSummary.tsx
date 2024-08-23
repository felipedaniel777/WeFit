import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../hooks/useCart';

const SummaryContainer = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
  max-width: 300px;
  margin: 20px auto;
`;

const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #333;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  color: #333;
`;

const CheckoutButton = styled.button`
  margin-top: 20px;
  background-color: #009edd;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #007bbd;
  }
`;

const CartSummary: React.FC = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <SummaryContainer>
      <SummaryTitle>Resumo do Carrinho</SummaryTitle>
      <SummaryItem>
        <span>Total de Itens:</span>
        <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Subtotal:</span>
        <span>${cartTotal.toFixed(2)}</span>
      </SummaryItem>
      <Total>
        <span>Total:</span>
        <span>${cartTotal.toFixed(2)}</span>
      </Total>
      <CheckoutButton onClick={() => console.log('Finalizar compra')}>
        FINALIZAR COMPRA
      </CheckoutButton>
    </SummaryContainer>
  );
};

export default CartSummary;
