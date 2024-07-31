import React from "react";
import Topbar from "../components/topbar";
import styled from "styled-components";
import PromotionalText from "../components/promotionaltext";

const Container = styled.div`
  width: auto;
  height: 634px;
  border: 1px solid;
  background: url("/waqas.jpg") no-repeat center center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const OverlayText = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Headingname = styled.h1`
  font-weight: bold;
  margin: 0px;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-size: 90px;
  text-align: center;
`;

const Homepage = () => {
  return (
    <>
      <PromotionalText />

      <Topbar />
      <Container>
        <OverlayText>
          <Headingname>FIND CLOTHES</Headingname>
          <Headingname> THAT MATCH</Headingname>
          <Headingname>YOUR STYLE</Headingname>
        </OverlayText>
      </Container>
    </>
  );
};

export default Homepage;
