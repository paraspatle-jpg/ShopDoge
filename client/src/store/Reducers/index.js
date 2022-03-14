import { combineReducers } from 'redux';
// import ErrorReducer from './ErrorReducer';
// import AuthReducer from './AuthReducer';
import {ProductReducer} from './ProductReducer';


export default combineReducers({
    // error: ErrorReducer,
    // auth: AuthReducer,
    product: ProductReducer
})
