import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './Features/ProductsSlice'
import CartSlice from './Features/CartSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: CartSlice,
    }
});