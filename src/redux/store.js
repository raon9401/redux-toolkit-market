import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducer/productReducer';
import authenticateReducer from './reducer/authenticateReducer';

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// /reducer/index.js
// export default combineReducers({
//     auth : authenticateReducer,
//     product: productReducer,
// });

const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product : productReducer,
    }
})

export default store