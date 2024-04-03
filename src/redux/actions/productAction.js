// middleWare 생성

import { productActions } from "../reducer/productReducer";

// getProducts : 기존에 있던 API 요청 함수를 Action으로 변경
function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products?q=${searchQuery}`;
    
        let reponse = await fetch(url)
        let data = await reponse.json();

        // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});
        dispatch(productActions.getAllProduct({data}));
    };
}

function getProductDetail(id){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products/${id}`;

        let reponse = await fetch(url)
        let data = await reponse.json();

        // dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS",payload:{data}});
        dispatch(productActions.getSingleProduct({data}));
    };
}


export const productAction = {getProducts, getProductDetail};