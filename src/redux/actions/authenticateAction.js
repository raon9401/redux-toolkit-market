import { authActions } from "../reducer/authenticateReducer";

// middleWare 생성
function login(id,password){
    return (dispatch, getState) => {
        // dispatch({type:"LOGIN_SUCCESS", payload:{id,password}});
        dispatch(authActions.login({id,password}));

    };
}

function logout(authenticate){
    return (dispatch, getState) => {
        // dispatch({type:"LOGOUT", payload:{authenticate}});
        dispatch(authActions.logout());

    };
}

export const authenticateAction = {login, logout};