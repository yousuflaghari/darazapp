import React from "react";
import styled from "styled-components";
import Topbar from "../components/topbar";
import Item from "../components/item";
import { useGetWomensDressesQuery } from "../api";
import PromotionalText from "../components/promotionaltext";
const Categorycontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 100px 0px 100px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-left: 100px;
  margin-right: 100px;
`;
const Heading = styled.h1`
  width: 403px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Categorypage = () => {
  const { data, error, isLoading } = useGetWomensDressesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = Array.isArray(data) ? data : data?.products || [];

  return (
    <>
      <PromotionalText />
      <Topbar />
      <Categorycontainer>
        <Heading>NEW ARRIVALS</Heading>
        <GridContainer>
          {products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </GridContainer>
      </Categorycontainer>
    </>
  );
};

export default Categorypage;
