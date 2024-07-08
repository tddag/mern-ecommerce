import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductListService } from '../../services/products'

const initialState = {
    productList: [],
    searchBarFilter: {
        name: null
    }
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateSearchBarFilter: (state, action) => {
            state.searchBarFilter = action.payload
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(getProductListAsync.fulfilled, (state, action) => {
                state.productList = action.payload;
            })
    }
})

export const getProductListAsync = createAsyncThunk(
    "products/getProductListAsync",
    async () => {
        return await getProductListService();
    }
)



export const { updateSearchBarFilter } = productsSlice.actions;
export default productsSlice.reducer;