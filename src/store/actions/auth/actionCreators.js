import * as actionTypes from './actionTypes';
import axios from '../../../axios/axios';
import jwtDecode from 'jwt-decode';



const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const asyncAuthStart = () => {
    return async (dispatch) => {
        dispatch(authStart());
        let data = {
            email: "y@gmail.com",
            password: "password"
        }
        try {
            let response = await axios.post('/users/login', data);
            let authInfo = {
                token: response.data.token,
                userId: response.data._id,
                email: response.data.email,
            }
            localStorage.setItem('token', authInfo.token);
            localStorage.setItem('userId', authInfo.userId);
            dispatch(asyncAuthSuccess(authInfo));
        }
        catch(e){
            dispatch(authFail(e));
            console.log(e);
        }
        
    }
}


const authSuccess = (payload) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload
    }
}


export const asyncAuthSuccess = (authInfo) => {
    return dispatch => {
        dispatch(authSuccess(authInfo));
        let decodedToken = jwtDecode(authInfo.token);
        let expirationTime = decodedToken.exp;
        expirationTime = expirationTime*1000;
        localStorage.setItem('expirationTime', expirationTime);
        const currentTime = new Date().getTime();
        const expiresIn = expirationTime - currentTime;
        setTimeout(()=> dispatch(authLogout()), expiresIn);
    }
}


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: error
    }
}



export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type: "AUTH_LOGOUT"
    }
}



export const asyncAppInitAutoLogin = () => {
    return (dispatch) => {
        let storedToken = localStorage.getItem('token');
        if(!storedToken){

        }
        else {
            let expirationTime = localStorage.getItem('expirationTime');
            let currentTime = new Date().getTime();
            if(currentTime > expirationTime){
                
            }
        }
    }
}