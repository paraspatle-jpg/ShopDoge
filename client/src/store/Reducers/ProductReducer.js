import {ActionTypes} from '../Types'

const initialState = {
    products: [],
}

export const ProductReducer = (state = initialState,{type,payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return { products: payload}
        case ActionTypes.FETCH_PRODUCTS:
            return { products: payload}
        
        default:
            return {state}
    }
}