import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import ConfirmationStateImage from "../../assets/Frame 2115.png";

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
  max-width: 300px;
  min-width: 300px;
  height: auto;
  min-height: 200px;
  margin-bottom: 20px;
`;

interface ConfirmationStateProps {
  message: string;
  onConfirm?: () => void;
}

const ConfirmationState: React.FC<ConfirmationStateProps> = ({ message, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      window.location.reload();
    }
  };

  return (
    <Container>
      <Message>{message}</Message>
      <Image src={ConfirmationStateImage} alt="Confirmation State" />
      <Button variant="normal" onClick={handleConfirm}>Voltar</Button>
    </Container>
  );
};

export default ConfirmationState;
