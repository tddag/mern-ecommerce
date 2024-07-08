import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})