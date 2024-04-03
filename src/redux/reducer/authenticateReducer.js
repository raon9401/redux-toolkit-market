import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id:'',
    password:'',
    authenticate:false,
}

const authenticateSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action){
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logout(state, action){
            state.id = "";
            state.password = "";
            state.authenticate = false;
        },
    }
});

export const authActions = authenticateSlice.actions
export default authenticateSlice.reducer;