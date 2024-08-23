import React from "react";
import styled from "styled-components";
import Button from "./Button";
import emptyStateImage from "../assets/Frame 2111.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  max-height: 500px;
  border-radius: 4px;
  padding: 60px;
  margin: 0 20px;
  text-align: center;
  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

const Message = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2f2e41;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 420px;
  min-width: 180px;
  height: 260px;
  margin-bottom: 20px;
  object-fit: cover;
`;

const EmptyState: React.FC<{ message: string }> = ({ message }) => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate("/"); 
  };

  return (
    <Container>
      <Message>{message}</Message>
      <Image src={emptyStateImage} alt="Empty State" />
      <Button variant="normal" onClick={goToHome}>
        Recarregar página
      </Button>
    </Container>
  );
};

export default EmptyState;
