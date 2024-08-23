import React from 'react';
import styled from 'styled-components';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button`
  background: none;
  border: none;
  color: #009edd;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #005efd;
  }
`;

const CounterValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  padding: 2px 16px;
  color: #2F2E41;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`;

interface QuantityCounterProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <CounterContainer>
      <CounterButton onClick={onDecrement}>
        <IoMdRemoveCircleOutline  />
      </CounterButton>
      <CounterValue>{quantity}</CounterValue>
      <CounterButton onClick={onIncrement}>
        <IoMdAddCircleOutline />
      </CounterButton>
    </CounterContainer>
  );
};

export default QuantityCounter;
