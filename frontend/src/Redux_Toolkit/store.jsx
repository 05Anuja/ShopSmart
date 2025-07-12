import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './Features/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
    }
});