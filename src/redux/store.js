import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducer/authenticateReducer';
import productSlice from './reducer/productSlice';


const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product : productSlice,
    }
})

export default store