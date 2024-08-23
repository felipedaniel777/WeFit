import React from "react";
import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

interface ButtonProps {
  variant?: "normal" | "card";
  added?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  count?: number;
}

const BaseButton = styled.button<{
  variant: "normal" | "card";
  added?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ variant }) => (variant === "card" ? "100%" : "auto")};
  min-width: 150px;
  padding: 10px 16px;
  background-color: ${({ added, variant }) =>
    variant === "card" && added ? "#039B00" : "#009EDD"};
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ added, variant }) =>
      variant === "card" && added ? "#028A00" : "#0073AA"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled(MdAddShoppingCart)`
  margin-right: 2px;
  font-size: 16px;
`;

const Text = styled.span<{ hasIcon: boolean }>`
  margin-left: ${({ hasIcon }) => (hasIcon ? "10px" : "0")};
`;

const Button: React.FC<ButtonProps> = ({
  variant = "normal",
  added = false,
  onClick,
  children,
  count,
}) => {
  const hasIcon = variant === "card" && count !== undefined;
  return (
    <BaseButton variant={variant} added={added} onClick={onClick}>
      <ContentWrapper>
        {variant === "card" && <CartIcon />}
        {count !== undefined && <span>{count}</span>}
        <Text hasIcon={hasIcon}>{children}</Text>
      </ContentWrapper>
    </BaseButton>
  );
};

export default Button;
