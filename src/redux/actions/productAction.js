// middleWare 생성

// getProducts : 기존에 있던 API 요청 함수를 Action으로 변경
function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products?q=${searchQuery}`;
    
        let reponse = await fetch(url)
        let data = await reponse.json();

        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});
    };
}


export const productAction = {getProducts};