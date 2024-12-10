import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, product, quantity } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += quantity;
      } else {
        state.items[id] = { product, quantity };
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload.id];
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;
