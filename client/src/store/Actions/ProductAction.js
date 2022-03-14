import fakestoreapi from "../../apis/fakeStoreApi"
import {ActionTypes} from '../Types'

export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get('products');
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}