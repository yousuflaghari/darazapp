import { configureStore } from "@reduxjs/toolkit";
import { womendressesapi } from "./actions";

const store = configureStore({
  reducer: {
    [womendressesapi.reducerPath]: womendressesapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(womendressesapi.middleware),
});
export default store;
