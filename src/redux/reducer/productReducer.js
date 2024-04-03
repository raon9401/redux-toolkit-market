let initialState = {
    productList:[],
}

// state : 저장해주고 싶은 state를 매개변수로 가져간다.
// action : action에 따라 어떤 실행을 할지 정해준다.
function productReducer(state=initialState, action) {
    let {type, payload} = action;

    switch (type){
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList:payload.data}
        
        default :
            return {...state};
    }

}


export default productReducer