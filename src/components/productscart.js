import { Delete } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  selectCartItems,
} from "../reducer/cartslice";

const Product = styled.div`
  width: 621px;
  height: 124px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  margin: 20px;
`;
const Imageproduct = styled.img`
  width: 124px;
  height: 124px;
  margin-right: 16px;
`;
const Detailproduct = styled.div`
  width: 527px;
  height: 124px;
  display: flex;
  justify-content: space-between;
`;
const Details = styled.div`
  height: 118px;
  width: 227px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Cartheadings = styled.h4`
  margin-top: 0px;
  margin-bottom: 5px;
`;
const Cartheadingsprice = styled.h4`
  margin-bottom: 3px;
`;
const Deleteincrementbutton = styled.div`
  width: 227px;
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Incrementsign = styled.div`
  width: 126px;
  height: 44px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
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
const Size1 = styled.p`
  font-size: small;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const Color = styled.p`
  font-size: small;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const DeleteIcon = styled.div`
  margin-left: 200px;
`;

const DeleteIconStyled = styled(Delete)`
  color: red;
`;

const ProductsCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <>
      {Object.values(cartItems).map((item, index) => (
        <Product key={index}>
          <Imageproduct src={item.product.images[0]} alt={item.product.title} />
          <Detailproduct>
            <Details>
              <Cartheadings>{item.product.title}</Cartheadings>
              <Size1>Size: Large</Size1>
              <Color>Color: White</Color>
              <Cartheadingsprice>${item.product.price}</Cartheadingsprice>
            </Details>
            <Deleteincrementbutton>
              <DeleteIcon>
                <DeleteIconStyled
                  onClick={() => handleDelete(item.product.id)}
                />
              </DeleteIcon>

              <Incrementsign>
                <Minus onClick={() => handleDecrement(item.product.id)}>
                  -
                </Minus>
                <Number>{item.quantity}</Number>
                <Plus onClick={() => handleIncrement(item.product.id)}>+</Plus>
              </Incrementsign>
            </Deleteincrementbutton>
          </Detailproduct>
        </Product>
      ))}
    </>
  );
};

export default ProductsCart;
