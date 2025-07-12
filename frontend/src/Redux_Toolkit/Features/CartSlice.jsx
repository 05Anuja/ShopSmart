import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            state.items.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addToCart, removeFromCart, clearCart} = CartSlice.actions;
export default CartSlice.reducer;