import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Promotionalcontainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
`;

const Container = styled.h1`
  font-size: 14px;
  text-align: center;
  color: white;
  font-family: sans-serif;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 56px;
  height: 22px;
  color: #007bff;
`;

const PromotionalText = () => {
  return (
    <>
      <Promotionalcontainer>
        <Container>
          Sign up and get 20% off your first order.
          <StyledLink to="/signup">Sign Up Now</StyledLink>
        </Container>
      </Promotionalcontainer>
    </>
  );
};
export default PromotionalText;
