import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Topbar from "../components/topbar";
import ProductsCart from "../components/productscart";
import PromotionalText from "../components/promotionaltext";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  width: 260px;
  height: 48px;
  text-align: center;
  margin-left: 108px;
  font-size: xx-large;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ProductCartsContainer = styled.div`
  width: 1240px;
  display: flex;
  margin: 24px 100px 0px 166px;
`;

const Pricebox = styled.div`
  width: 505px;
  height: 458px;
  border: 1px solid #ccc;
  padding: 24px;
  margin-left: 24px;
  border-radius: 24px;
`;

const Summaryheading = styled.h1`
  width: 179px;
  height: 32px;
  margin: 0px;
  font-size: larger;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Calculatedprice = styled.div`
  width: 457px;
  height: 193px;
`;

const Valuebox = styled.div`
  width: 457px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Borderline = styled.div`
  width: 457px;
  border-bottom: 1px solid;
  margin-top: 30px;
`;

const Subheading = styled.p`
  font-size: large;
  margin-top: 0px;
`;

const Subheadingvalue = styled.h4`
  font-size: larger;
  margin-top: 0px;
`;

const Subheadingvaluediscount = styled.h4`
  color: red;
  font-size: large;
  margin-top: 0px;
`;

const Valueboxtotal = styled.div`
  width: 457px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Subheadingtotal = styled.p`
  font-size: x-large;
`;

const Subheadingvaluetotal = styled.h4`
  font-size: x-large;
`;

const Productscontainer = styled.div`
  width: 715px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 24px;
`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  const calculateSubtotal = (cartItemsArray) => {
    return cartItemsArray.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const calculateTotalQuantity = (cartItemsArray) => {
    return cartItemsArray.reduce((total, item) => total + item.quantity, 0);
  };

  const subtotal = calculateSubtotal(cartItemsArray);
  const discount = subtotal * 0.4;
  const deliveryFee = 50;
  const total = subtotal - discount + deliveryFee;
  const totalQuantity = calculateTotalQuantity(cartItemsArray);
  console.log(totalQuantity, "hello");
  return (
    <>
      <PromotionalText />
      <Topbar />
      <CartContainer>
        <Heading>Your Cart</Heading>
        <ProductCartsContainer>
          <Productscontainer>
            <ProductsCart items={cartItems} />
          </Productscontainer>
          <Pricebox>
            <Summaryheading>Order Summary</Summaryheading>
            <Calculatedprice>
              <Valuebox>
                <Subheading>Subtotal</Subheading>
                <Subheadingvalue>${subtotal.toFixed(2)}</Subheadingvalue>
              </Valuebox>
              <Valuebox>
                <Subheading>Discount(-40%)</Subheading>
                <Subheadingvaluediscount>
                  -${discount.toFixed(2)}
                </Subheadingvaluediscount>
              </Valuebox>
              <Valuebox>
                <Subheading>Delivery Fee</Subheading>
                <Subheadingvalue>${deliveryFee.toFixed(2)}</Subheadingvalue>
              </Valuebox>
              <Borderline></Borderline>
              <Valueboxtotal>
                <Subheadingtotal>Total</Subheadingtotal>
                <Subheadingvaluetotal>${total.toFixed(2)}</Subheadingvaluetotal>
              </Valueboxtotal>
            </Calculatedprice>
          </Pricebox>
        </ProductCartsContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
