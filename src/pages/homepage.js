import React from "react";
import Topbar from "../components/topbar";
import styled from "styled-components";
import PromotionalText from "../components/promotionaltext";

const Container = styled.div`
  width: 720px;
  height: 603px;
  border: 13px solid #f2f0f1;
  background: url("/drazapp1.jpg") no-repeat center center;
  background-size: contain;
  display: flex;
  margin-left: 122px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Text = styled.div`
  margin-top: 60px;
  width: 720px;
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
const Container1 = styled.div`
  display: flex;
  height: 643px;
  background-color: #f2f0f1;
`;
const Homepage = () => {
  return (
    <>
      <PromotionalText />

      <Topbar />
      <Container1>
        <Text>
          <Headingname>FIND CLOTHES</Headingname>
          <Headingname> THAT MATCH</Headingname>
          <Headingname>YOUR STYLE</Headingname>
        </Text>
        <Container></Container>
      </Container1>

      {/*  <Container>
        <Text>
          <Headingname>FIND CLOTHES</Headingname>
          <Headingname> THAT MATCH</Headingname>
          <Headingname>YOUR STYLE</Headingname>
        </Text>
      </Container> */}
    </>
  );
};

export default Homepage;
