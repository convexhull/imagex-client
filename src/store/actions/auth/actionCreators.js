import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';
import jwtDecode from 'jwt-decode';



const loginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    }
}


const loginFail = (error) => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        payload: error
    }
}


const loginSuccess = (payload) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload
    }
}

export const asyncUserLoginStart = (email, password) => {
    return async (dispatch) => {
        dispatch(loginStart());
        let data = {
            email,
            password
        }
        try {
            let response = await Axios.post('/users/login', data);
            let authInfo = {
                token: response.data.token,
                userId: response.data._id,
                email: response.data.email,
            }
            localStorage.setItem('token', authInfo.token);
            localStorage.setItem('userId', authInfo.userId);
            dispatch(asyncLoginSuccess(authInfo));
        }
        catch(e){
            dispatch(loginFail(e));
            console.log(e);
        }
        
    }
}



const userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type: "USER_LOGOUT"
    }
}


export const asyncLoginSuccess = (authInfo) => {
    return dispatch => {
        dispatch(loginSuccess(authInfo));
        let decodedToken = jwtDecode(authInfo.token);
        let expirationTime = decodedToken.exp;
        expirationTime = expirationTime*1000;
        localStorage.setItem('expirationTime', expirationTime);
        const currentTime = new Date().getTime();
        const expiresIn = expirationTime - currentTime;
        setTimeout(()=> dispatch(userLogout()), expiresIn);
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

export const asyncUserSignupStart = (userInfo) => {
    return async (dispatch) => {
        dispatch(userSignupStart());
        let data = userInfo;
        try {
            let response = await Axios.post('/users/signup', data);
            console.log(response);
        }
        catch(e){
            console.log(e);
        }   
    }
}