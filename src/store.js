import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { womendressesapi } from "./api";
import cartReducer from "./reducer/cartslice";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Specify which reducers you want to persist
};

// Combine your reducers
const rootReducer = combineReducers({
  [womendressesapi.reducerPath]: womendressesapi.reducer,
  cart: cartReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(womendressesapi.middleware),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
