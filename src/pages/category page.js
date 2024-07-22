import React from "react";
import styled from "styled-components";
import Topbar from "../components/topbar";
import Item from "../components/item";
import { useGetWomensDressesQuery } from "../actions";

const Categorycontainer = styled.div`
  height: 700px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  width: 750px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 10px;
`;

const Categorypage = () => {
  const { data, error, isLoading } = useGetWomensDressesQuery();
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = Array.isArray(data) ? data : data?.products || [];

  return (
    <>
      <Topbar />
      <Categorycontainer>
        <h1>Categorypage</h1>
        <GridContainer>
          {products.map((product, index) => (
            <Item
              key={index}
              id={product.id}
              name={product.title}
              image={product.images[0]}
              price={product.price}
            />
          ))}
        </GridContainer>
      </Categorycontainer>
    </>
  );
};

export default Categorypage;
