import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import Button from "../components/Button";
import QuantityCounter from "../components/QuantityCounter";
import EmptyState from "../components/EmptyState";
import ConfirmationState from "../components/ConfirmationState";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  margin: 20px 16px;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 700;
  color: #999999;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid #999999;
  padding-bottom: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 80px auto;
    gap: 16px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    widht: 100%;
    max-width: 80px;
    height: auto;
    border-radius: 4px;
    object-fit: contain;
  }
`;

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .upper-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .lower-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    @media (min-width: 769px) {
      margin-top: 0;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const ProductDetailsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .product-name {
    font-size: 14px;
    font-weight: 700;
    color: #2f2e41;
  }

  .product-price {
    font-size: 16px;
    font-weight: 700;
    color: #2f2e41;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProductDetailsMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .product-name {
    font-size: 14px;
    font-weight: 700;
    color: #2f2e41;
  }

  .product-price {
    font-size: 16px;
    font-weight: 700;
    color: #2f2e41;
    white-space: nowrap;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SubtotalDesktop = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubtotalMobile = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #2F2E41;
  white-space: nowrap;
  margin-right: 16px;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    text-align: right;
    display: flex;
    flex-direction: column;

    &::before {
      content: "SUBTOTAL";
      font-size: 12px;
      color: #999999;
      margin-bottom: 4px;
      font-weight: 700;
    }
  }
`;

const TrashIconDesktop = styled(FaTrash)`
  width: 18px;
  height: 18px;
  color: #009edd;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  justify-self: flex-end;

  &:hover {
    color: #e74c3c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TrashIconMobile = styled(FaTrash)`
  width: 16px;
  height: 16px;
  color: #009edd;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #e74c3c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TotalLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #999999;
  margin-right: 24px;
`;

const TotalValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #2F2E41;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Cart: React.FC = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartTotal, clearCart } = useCart();
  const [isPurchaseComplete, setPurchaseComplete] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    clearCart();
    setPurchaseComplete(true);
  };

  if (isPurchaseComplete) {
    return (
      <ConfirmationState
        message="Compra realizada com sucesso!"
        onConfirm={() => navigate("/")}
      />
    );
  }

  if (cartItems.length === 0) {
    return <EmptyState message="Parece que não há nada por aqui :(" />;
  }

  return (
    <CartContainer>
      <>
        <HeaderRow>
          <div>PRODUTO</div>
          <div>QTD</div>
          <div>SUBTOTAL</div>
          <div></div>
        </HeaderRow>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ProductInfo>
              <img src={item.image} alt={item.title} />
              <ProductDetailsDesktop>
                <div className="product-name">{item.title}</div>
                <div className="product-price">
                  R$ {item.price.toFixed(2)}
                </div>
              </ProductDetailsDesktop>
            </ProductInfo>
            <ProductDetailsWrapper>
              <div className="upper-row">
                <ProductDetailsMobile>
                  <div className="product-name">{item.title}</div>
                  <div className="product-price">
                    R$ {item.price.toFixed(2)}
                  </div>
                  <TrashIconMobile
                    onClick={() => removeItemFromCart(item.id)}
                  />
                </ProductDetailsMobile>
              </div>
              <div className="lower-row">
                <QuantityCounter
                  quantity={item.quantity}
                  onIncrement={() => addItemToCart(item)}
                  onDecrement={() => removeItemFromCart(item.id)}
                />
                <SubtotalMobile>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </SubtotalMobile>
              </div>
            </ProductDetailsWrapper>
            <SubtotalDesktop>
              R$ {(item.price * item.quantity).toFixed(2)}
            </SubtotalDesktop>
            <TrashIconDesktop onClick={() => removeItemFromCart(item.id)} />
          </CartItem>
        ))}
        <Footer>
          <FullWidthButton onClick={handlePurchase}>
            FINALIZAR PEDIDO
          </FullWidthButton>
          <TotalContainer>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalValue>R$ {cartTotal.toFixed(2)}</TotalValue>
          </TotalContainer>
        </Footer>
      </>
    </CartContainer>
  );
};

export default Cart;