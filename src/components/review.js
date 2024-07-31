import React from "react";
import styled from "styled-components";

// Styled components
const ReviewContainer = styled.div`
  width: 610px;
  height: 247px;
  border: 1px solid #ddd; /* Optional: add border to see the container */
  border-radius: 10px;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 16px; /* Space between reviews */
`;

const ReviewInnerContainer = styled.div`
  width: 546px;
  height: 140px;
  padding: 28px 32px;
`;

const ReviewDateContainer = styled.div`
  width: 546px;
  height: 22px;
  padding: 4px 32px;
  font-size: 14px;
  color: #888;
`;

const Stars = styled.span`
  font-size: 1.2em;
  color: gold;
  width: 127px;
  height: 22px;
  margin-bottom: 15px;
`;

const ReviewerName = styled.h3`
  margin: 0;
  font-size: 1em;
  color: #333;
  width: 146px;
  height: 24px;
  margin-bottom: 12px;
`;

const Comment = styled.p`
  margin: 8px 0;
  font-size: 0.9em;
  width: 546px;
  height: 66px;
  margin-bottom: 24px;
  color: #555;
`;

const Review = ({ review }) => {
  const { rating, reviewerName, comment, date } = review;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
  return (
    <ReviewContainer>
      <ReviewInnerContainer>
        <Stars>{"★".repeat(rating)}</Stars>
        <ReviewerName>{reviewerName}</ReviewerName>
        <Comment>{comment}</Comment>
      </ReviewInnerContainer>
      <ReviewDateContainer>Posted on {formattedDate} </ReviewDateContainer>
    </ReviewContainer>
  );
};

export default Review;
