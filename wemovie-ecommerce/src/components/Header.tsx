import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import bagIcon from '../assets/icon-bag.png'; 

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  background-color: #2F2E41;
  height: 60px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  color: white;
`;

const CartInfo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.3s ease;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    transform: translateY(-2px);
    background-color: #344466;
  }
`;

const CartDetails = styled.div`
  margin-right: 15px;
  text-align: right;

  .cart-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: white;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .cart-items {
    font-size: 12px;
    color: #999999;
  }
`;

const ShoppingBagIcon = styled.img`
  width: 24px;
  height: 24px;
  color: white;
`;

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <HeaderContainer>
      <Logo>WeMovies</Logo>
      <CartInfo to="/cart">
        <CartDetails>
          <div className="cart-title">Meu Carrinho</div>
          <div className="cart-items">{itemCount} {itemCount === 1 ? 'item' : 'itens'}</div>
        </CartDetails>
        <ShoppingBagIcon src={bagIcon} alt="Shopping Bag" />
      </CartInfo>
    </HeaderContainer>
  );
};

export default Header;
