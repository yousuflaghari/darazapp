import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1240px;
  height: 48px;
  margin-left: 170px;
  margin-right: 100px;
  margin-top: 48px;
`;

const Logo = styled.h1`
  height: 22px;
  width: 160px;
  color: #333;
  font-size: large;
  margin-top: 10px;
  margin-bottom: 13px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 56px;
  height: 22px;
  color: #007bff;
`;

const StyledLink1 = styled(Link)`
  text-decoration: none;
  width: 87px;
  height: 22px;
  color: #007bff;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin: 0 10px;
  background-color: #efefef;
  width: 356px;
  height: 25px;
  border: none;

  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
`;

const Navcontainer = styled.nav`
  width: 321px;
  height: 22px;
  gap: 24px;
  display: flex;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 577px;
  background-color: #efefef;
  border: 1px solid #ccc;
  border-radius: 19px;
  padding-left: 10px;
  margin: 0px 40px 0px 40px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-left: 20px;
  position: relative;
`;

const TopContainer = styled.div`
  margin-bottom: 30px;
`;

const Borderline = styled.div`
  border-bottom: 1px solid #ccc;
  margin-top: 24px;
  margin-left: 170px;
  width: 1240px;
`;

const CartQuantity = styled.span`
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.6rem;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const CartIconContainer = styled.div`
  position: relative;
`;

const Topbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);
  const totalQuantity = cartItemsArray.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const location = useLocation();

  return (
    <TopContainer>
      <TopbarContainer>
        <Logo>SHOP.CO</Logo>
        <Navcontainer>
          <StyledLink to="/product/:productId">Shop</StyledLink>
          <StyledLink to="/sale">On Sale</StyledLink>
          <StyledLink1 to="/categorypage">New Arrival</StyledLink1>
          <StyledLink to="/brands">Brands</StyledLink>
        </Navcontainer>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search all products" />
        </SearchContainer>
        <IconsContainer>
          <CartIconContainer>
            <Link to="/cart">
              <ShoppingCartIcon />
              {location.pathname === "/cart" && totalQuantity > 0 && (
                <CartQuantity>{totalQuantity}</CartQuantity>
              )}
            </Link>
          </CartIconContainer>
          <AccountCircleRoundedIcon />
        </IconsContainer>
      </TopbarContainer>
      <Borderline></Borderline>
    </TopContainer>
  );
};

export default Topbar;
