import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../components/topbar";
import styled from "styled-components";
import { useGetWomensDressesQuery } from "../api";
import Review from "../components/review";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/cartslice";
import PromotionalText from "../components/promotionaltext";

const Container = styled.div`
  display: flex;
  margin-left: 170px;
  margin-right: 100px;
`;

const LargeImage = styled.img`
  width: 444px;
  height: 530px;
  border-radius: 10px;
  background-color: #f0eeed;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 14px;
`;

const Thumbnail = styled.img`
  width: 152px;
  height: 167px;
  border-radius: 10px;
  margin-right: 14px;
  background-color: #f0eeed;
`;

const DetailContainer = styled.div`
  margin-left: 40px;
`;

const ProductName = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const StarsContainer = styled.div`
  display: flex;
  margin-top: 14px;
  width: 193px;
  height: 25px;
`;

const Stars = styled.span`
  font-size: 1.2em;
  color: gold;
`;

const RatingText = styled.span`
  font-size: 1em;
  color: #555;
  margin-left: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 176px;
  height: 43px;
  margin-top: 14px;
`;

const DiscountPrice = styled.h1`
  font-size: 1.5em;
`;

const ProductPrice = styled.h1`
  font-size: 1.5em;
  color: #b7a8a8;
  text-decoration: line-through;
  margin-left: 20px;
`;

const DiscountText = styled.div`
  font-size: 16px;
  width: 44px;
  height: 22px;
  color: red;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc8c8;
`;

const DescriptionContainer = styled.div`
  margin-top: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 600px;
    border-bottom: 1px solid #ccc;
  }
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
  margin: 0;
  width: 590px;
  height: 63px;
`;

const Imagecontainer = styled.div`
  display: flex;
`;

const Discountcontainer = styled.div`
  width: 72px;
  height: 34px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Selectcolor = styled.p`
  margin-top: 48px;
  width: 93px;
  height: 11px;
`;

const Colorcircle = styled.div`
  width: 143px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 600px;
    border-bottom: 1px solid #ccc;
  }
`;

const Circle = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #314f4a;
`;

const Sizeboxname = styled.p`
  width: 87px;
  height: 11px;
  margin-top: 37px;
  margin-bottom: 20px;
`;

const Boxsize = styled.div`
  width: 420px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 24px;

  &::after {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 600px;
    border-bottom: 1px solid #ccc;
  }
`;

const SizeboxS = styled.div`
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 24px;
  background-color: #f0f0f0;
`;

const SizeboxM = styled.div`
  width: 105px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: #f0f0f0;
`;

const SizeboxL = styled.div`
  width: 89px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: #000000;
  color: white;
`;

const SizeboxXL = styled.div`
  width: 104px;
  height: 46px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Incrementsign = styled.div`
  width: 170px;
  height: 52px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  border-radius: 24px;
`;

const Minus = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Plus = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Number = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IncrementAdd = styled.div`
  margin-top: 48px;
  width: 590px;
  height: 52px;
  display: flex;
`;

const AddToCart = styled.button`
  width: 400px;
  height: 52px;
  background-color: black;
  border-radius: 24px;
  color: white;
`;

const ReviewsContainer = styled.div`
  width: 1240px;
  margin-left: 170px;
  margin-right: 100px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Reviewsheading = styled.h1`
  font-size: 19px;
  margin-left: 171px;
  margin-top: 32px;
`;

const truncateDescription = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetWomensDressesQuery();
  const products = Array.isArray(data) ? data : data?.products || [];
  const product = products.find((p) => p.id === parseInt(productId));

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  const { id, title, price, description, images, rating, reviews } = product;
  const shortDescription = truncateDescription(description, 20);

  const handeladdtocart = () => {
    dispatch(addToCart({ id, product, quantity }));
    setQuantity(1);
  };

  return (
    <>
      <PromotionalText />
      <Topbar />
      <Container>
        <Imagecontainer>
          <ThumbnailContainer>
            {images.slice(1).map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
              />
            ))}
          </ThumbnailContainer>
          <LargeImage src={images[0]} alt={title} />
        </Imagecontainer>
        <DetailContainer>
          <ProductName>{title.toUpperCase()}</ProductName>
          <StarsContainer>
            <Stars>{"★".repeat(rating)}</Stars>
            <RatingText>{rating}/5</RatingText>
          </StarsContainer>
          <PriceContainer>
            <DiscountPrice>${(price * 0.6).toFixed(2)}</DiscountPrice>
            <ProductPrice>${price}</ProductPrice>
            <Discountcontainer>
              <DiscountText>40%</DiscountText>
            </Discountcontainer>
          </PriceContainer>
          <DescriptionContainer>
            <Description>{shortDescription}</Description>
          </DescriptionContainer>
          <Selectcolor>Select Colors</Selectcolor>
          <Colorcircle>
            <Circle />
            <Circle />
            <Circle />
          </Colorcircle>
          <Sizeboxname>Choose Size</Sizeboxname>
          <Boxsize>
            <SizeboxS>Small</SizeboxS>
            <SizeboxM>Medium</SizeboxM>
            <SizeboxL>Large</SizeboxL>
            <SizeboxXL>X-Large</SizeboxXL>
          </Boxsize>
          <IncrementAdd>
            <Incrementsign>
              <Minus onClick={handleDecrement}>-</Minus>
              <Number>{quantity}</Number>
              <Plus onClick={handleIncrement}>+</Plus>
            </Incrementsign>
            <AddToCart onClick={handeladdtocart}>Add To Cart</AddToCart>
          </IncrementAdd>
        </DetailContainer>
      </Container>
      <Reviewsheading>All Reviews</Reviewsheading>
      <ReviewsContainer>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => <Review key={index} review={review} />)
        ) : (
          <p>No reviews available</p>
        )}
      </ReviewsContainer>
    </>
  );
};

export default ProductPage;
