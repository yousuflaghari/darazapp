import React from "react";
import styled from "styled-components";

const PriceDetailContainer = styled.div`
  width: 505px;
  height: 458px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-left: 20px;
  border-radius: 24px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const calculateSubtotal = (items) => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};

const PriceDetail = ({ cartItems }) => {
  console.log("cart", cartItems);
  const subtotal = calculateSubtotal(cartItems);
  console.log("subtotal", subtotal);

  const discount = subtotal * 0.4;
  const deliveryFee = 50;
  const total = subtotal - discount + deliveryFee;

  return (
    <PriceDetailContainer>
      <PriceRow>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </PriceRow>
      <PriceRow>
        <span>Discount (40%):</span>
        <span>-${discount.toFixed(2)}</span>
      </PriceRow>
      <PriceRow>
        <span>Delivery Fee:</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </PriceRow>
      <PriceRow>
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </PriceRow>
    </PriceDetailContainer>
  );
};

export default PriceDetail;
