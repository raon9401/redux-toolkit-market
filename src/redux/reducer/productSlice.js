import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    selectedItem:{},
    isLoading: false,
    error:null,
}


export const fetchProducts = createAsyncThunk('product/fetchAll',async (searchQuery,thunkApi) => {
    try{
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products?q=${searchQuery}`;
    
        let reponse = await fetch(url)
        return await reponse.json();
    }catch(error){
        // error 처리
        // thunkApi에는 rejectWithValue로 에러 처리 할 수 있다.
        thunkApi.rejectWithValue(error.message);
    }
})

export const fetchProductDetail = createAsyncThunk('product/fetchDetail',async (id,thunkApi) => {
    try{
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products/${id}`;

        let reponse = await fetch(url);
        return await reponse.json();
    }catch(error){
        // error 처리
        // thunkApi에는 rejectWithValue로 에러 처리 할 수 있다.
        thunkApi.rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            // productAll 
            .addCase(fetchProducts.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
            // productDetail
            .addCase(fetchProductDetail.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.selectedItem = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

console.log('pppp',productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;