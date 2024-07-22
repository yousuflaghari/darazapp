import React from "react";
import Topbar from "../components/topbar";
import styled from "styled-components";

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
  left: 10px; /* Adjust as needed to position closer/farther from the left */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Headingname = styled.h1`
  font-weight: bold;
  margin: 0px;
  color: black; /* Updated color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-size: 90px;
  text-align: center; /* Ensure text inside is center-aligned */
`;

const Homepage = () => {
  return (
    <>
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
