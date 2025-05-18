import { configureStore } from '@reduxjs/toolkit'
import CartItem from "./CartItem.js";
export const store = configureStore({
  reducer: {
    CartItem:CartItem,
  },
});
