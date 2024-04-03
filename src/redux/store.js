import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
// import rootReducer from "./reducer/index.js"
import rootReducer from "./reducer" // 위 코드랑 동일 자동으로 index.js 파일을 읽어온다.
import { composeWithDevTools } from '@redux-devtools/extension';


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store