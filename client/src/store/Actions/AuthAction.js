import shopDogeApi from "../../apis/shopDogeApi"
import {ActionTypes} from '../Types'

export const register = ({name, email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({name, email, password});

    shopDogeApi.post('localhost:5000/api/register', body, config)
        .then(res => dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
           // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: ActionTypes.REGISTER_FAIL
            });
        });
}

// export const login = ({email, password}) => dispatch => {
//     // headers
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     //request body
//     const body = JSON.stringify({email, password});

//     axios.post('localhost:5000/api/login',body,config)
//         .then(res => dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         }))
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
//             dispatch({
//                 type: LOGIN_FAIL
//             });
//         });
// }