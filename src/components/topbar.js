import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const StyledLink = styled(Link)`
  margin: 10px 10px;
  text-decoration: none;
  font-size: large;
  color: #007bff;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 10px;
  background-color: #efefef;
  width: 356px;
  height: 25px;
  border-radius: 19px;
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <Logo>SHOP.CO</Logo>
      <nav>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/sale">On Sale</StyledLink>
        <StyledLink to="/new">New Arrival</StyledLink>
        <StyledLink to="/brands">Brands</StyledLink>
      </nav>
      <SearchInput placeholder="Search all products" />
      <nav>
        <StyledLink to="/cart">Cart</StyledLink>
        <StyledLink to="/profile">
          <img src="path-to-image" alt="Profile" />
        </StyledLink>
      </nav>
    </TopbarContainer>
  );
};

export default Topbar;
