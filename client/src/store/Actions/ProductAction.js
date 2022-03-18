import fakestoreapi from "../../apis/fakeStoreApi"
import {ActionTypes} from '../Types'

export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get('products');
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}
export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`products/${id}`);
    dispatch({type: ActionTypes.FETCH_PRODUCT, payload: response.data})
}
