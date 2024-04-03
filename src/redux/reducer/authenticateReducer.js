let initialState = {
    id:'',
    password:'',
    authenticate:false,
}

// state : 저장해주고 싶은 state를 매개변수로 가져간다.
// action : action에 따라 어떤 실행을 할지 정해준다.
function authenticateReducer(state=initialState, action) {
    let {type, payload} = action;

    switch (type){
        case "LOGIN_SUCCESS":
            console.log("Login Success");
            return {...state, id:payload.id, password:payload.password, authenticate:true}
        case "LOGOUT":
            console.log("LogOut");
            return {...state, id:'', password:'', authenticate:false}
        default :
            return {...state};
    }

}


export default authenticateReducer