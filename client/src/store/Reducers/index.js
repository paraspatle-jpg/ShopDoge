import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import AuthReducer from './AuthReducer';


export default combineReducers({
    error: ErrorReducer,
    auth: AuthReducer,

})