let initialState = {
    productDetail:{},
}

// state : 저장해주고 싶은 state를 매개변수로 가져간다.
// action : action에 따라 어떤 실행을 할지 정해준다.
function productDetailReducer(state=initialState, action) {
    let {type, payload} = action;
    switch (type){
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return {...state, productDetail:payload.data}
        
        default :
            return {...state};
    }

}


export default productDetailReducer