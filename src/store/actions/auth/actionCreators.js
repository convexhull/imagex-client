import * as actionTypes from './actionTypes';



const authStart = (payload) => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const asyncAuthStart = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(authStart(payload))
        },1000);
    }
}


