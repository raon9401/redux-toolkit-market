// middleWare 생성
function login(id,password){
    return (dispatch, getState) => {
        dispatch({type:"LOGIN_SUCCESS", payload:{id,password}});
    };
}

function logout(authenticate){
    return (dispatch, getState) => {
        dispatch({type:"LOGOUT", payload:{authenticate}});
    };
}

export const authenticateAction = {login, logout};