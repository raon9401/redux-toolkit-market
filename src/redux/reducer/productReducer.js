import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    selectedItem:null,
}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        getAllProduct(state, action){
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action){
            state.selectedItem = action.payload.data;
        },
    },
});

console.log('pppp',productSlice);

export const productActions = productSlice.actions
export default productSlice.reducer;