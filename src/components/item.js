import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f1f2f8;
  border-radius: 13px;
`;

const Image = styled.img`
  width: 180px;
  height: 210px;
  border-radius: 10px;
  background-color: #f1f2f8;
`;

const Productname = styled.h6`
  font-size: large;
  margin: 0;
  text-align: left;
  background-color: white;
  border-radius: 5px;
`;

const Productprice = styled.h1`
  font-size: large;
  margin: 0;
  text-align: left;
  background-color: white;
  border-radius: 5px;
`;

const Itemcontainer = styled.div`
  width: 185px;
  height: 310px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px;
`;

const Stars = styled.div`
  font-size: 24px;
  color: gold;
`;

const RatingText = styled.span`
  font-size: medium;
`;
const Detailcontainer = styled.div`
  width: 180px;
  height: 110px;
  background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;
const Item = ({ id, name, image, price }) => {
  return (
    <StyledLink to={`/product/${id}`}>
      <Itemcontainer>
        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
        <Detailcontainer>
          <Productname>{name}</Productname>
          <StarsContainer>
            <Stars>★★★★☆</Stars>
            <RatingText>4/5</RatingText>
          </StarsContainer>
          <Productprice>${price}</Productprice>
        </Detailcontainer>
      </Itemcontainer>
    </StyledLink>
  );
};

export default Item;
