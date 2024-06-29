import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.products.findIndex(prod => prod._id == action.payload._id)
            if (index !== -1) {
                state.products[index].qty += action.payload.qty
            } else {
                state.products.push(action.payload)
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;