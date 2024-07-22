import React from "react";
import { useParams } from "react-router-dom";
import Topbar from "../components/topbar";
import styled from "styled-components";
import { useGetWomensDressesQuery } from "../actions";

const ProductPage = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetWomensDressesQuery();
  const products = Array.isArray(data) ? data : data?.products || [];
  const product = products.find((p) => p.id === parseInt(productId));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  const { title, price, description, images, rating } = product;
  return (
    <>
      <Topbar />
      <Container>
        <LargeImage src={images[0]} alt={title} />
        <ThumbnailContainer>
          {images.slice(1).map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
            />
          ))}
        </ThumbnailContainer>
        <DetailContainer>
          <ProductName>{title}</ProductName>
          <StarsContainer>
            <Stars>
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </Stars>
            <RatingText>{rating}/5</RatingText>
          </StarsContainer>
          <PriceContainer>
            <DiscountPrice>${(price * 0.8).toFixed(2)}</DiscountPrice>
            <ProductPrice>${price}</ProductPrice>
            <DiscountText>40% off</DiscountText>
          </PriceContainer>
          <Description>{description}</Description>
        </DetailContainer>
      </Container>
    </>
  );
};

export default ProductPage;

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LargeImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const DetailContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductName = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Stars = styled.span`
  font-size: 1.2em;
  color: gold;
`;

const RatingText = styled.span`
  margin-left: 10px;
  font-size: 1em;
  color: #555;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiscountPrice = styled.h1`
  font-size: 1.5em;
  margin-left: 20px;
`;

const ProductPrice = styled.h1`
  font-size: 1.5em;
  color: #b7a8a8;
  text-decoration: line-through;
  margin-left: 20px;
`;

const DiscountText = styled.div`
  font-size: 1em;
  color: green;
  margin-left: 20px;
  margin-top: 5px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1em;
  color: #666;
`;
