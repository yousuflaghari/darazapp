import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/cartslice";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 295px;
  height: 298px;
  background-color: #f1f2f8;
  border-radius: 13px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
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
  margin-bottom: 8px;
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
  height: 340px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  position: relative;
  cursor: pointer;

  &:hover .hover-button {
    display: block;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 8px;
`;

const Stars = styled.div`
  font-size: 24px;
  color: gold;
  margin-bottom: 8px;
`;

const RatingText = styled.span`
  font-size: medium;
  margin-left: 8px;
`;

const Detailcontainer = styled.div`
  width: 180px;
  height: 110px;
  background-color: white;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  transition: opacity 0.3s ease;
  padding: 5px 10px;
`;

const Priceandcart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  margin-bottom: 50px;
`;

const Item = ({ id, name, image, price, rating }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (id) => {
    console.log("Add to Cart clicked");
    dispatch(addToCart(id));
  };

  const renderStars = (rating) => {
    const stars = [];
    const stardata = rating.toString().split(".");
    const fullStars = stardata[0];
    const halfstar = stardata[1] || 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} />);
    }

    if (halfstar >= 30 && halfstar <= 79) {
      stars.push(<StarHalfIcon key="half" />);
    } else if (halfstar >= 80) {
      stars.push(<StarIcon key={`full-${fullStars}`} />);
    }

    return stars;
  };

  return (
    <ItemWrapper>
      <StyledLink to={`/product/${id}`}>
        <ImageContainer>
          <Image src={image} alt={name} />
        </ImageContainer>
        <Detailcontainer>
          <Productname>{name}</Productname>
          <StarsContainer>
            <Stars>{renderStars(rating)}</Stars>
            <RatingText>{rating}/5</RatingText>
          </StarsContainer>
          <Productprice>${price}</Productprice>
        </Detailcontainer>
      </StyledLink>
      <Priceandcart>
        <Button className="hover-button" onClick={() => handleButtonClick(id)}>
          Add to Cart
        </Button>
      </Priceandcart>
    </ItemWrapper>
  );
};

export default Item;
