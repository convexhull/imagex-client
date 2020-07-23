import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';
import jwtDecode from 'jwt-decode';



const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const asyncAuthStart = (email, password) => {
    return async (dispatch) => {
        dispatch(authStart());
        let data = {
            email,
            password
        }
        console.log(data);
        try {
            let response = await Axios.post('/users/login', data);
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



const userSignupStart = () => {
    return {
        type: actionTypes.USER_SIGNUP_START
    }
}


const userSignupSuccess = (payload) => {
    return {
        type: actionTypes.USER_SIGNUP_SUCCESS
    }
}

const userSignupFailure = () => {
    return {
        type: actionTypes.USER_SIGNUP_FAILURE
    }
}

export const asyncUserSignup = (userInfo) => {
    return async (dispatch) => {
        dispatch(userSignupStart());
        let data = userInfo;
        console.log("xxxx", data);
        try {
            let response = await Axios.post('/users/signup', data);
            console.log(response);
        }
        catch(e){
            console.log(e);
        }   
    }
}