import { createSlice } from '@reduxjs/toolkit';
import { getProductListService } from '../../services/productServices'

const initialState = {
    productList: [],
    filteredProductList: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductList: async (state) => {
            try {
                getProductListService()
                    .then(res => {
                        console.log("TD Products")
                        console.log(res);                           
                        state.productList = res;
                     
                    })

                // state.productList = products;
                // state.filteredProductList = state.productList 
            } catch (e) {
                console.log(e)
            }
        },
        filterList: (state, action) => {
            state.filteredProductList = []
        }
    }
})

export const { getProductList } = productsSlice.actions;
export default productsSlice.reducer;