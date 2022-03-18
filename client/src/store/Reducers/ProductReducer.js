import {ActionTypes} from '../Types'

const initialState = {
    products: [],
}

export const ProductReducer = (state = initialState,{type,payload}) => {
    switch(type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload}
        case ActionTypes.FETCH_PRODUCT:
            return { ...state, selected: payload}
        default:
            return {state}
    }
}