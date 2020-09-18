import * as actionTypes from './actionTypes';
import jwtDecode from 'jwt-decode';
import Axios from '../../../axios/axios';




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
            if(e.response && e.response.data){
                dispatch(loginFail(e.response.data));
            }
        }
    }
}



export const userLogout = () => {
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



export const asyncAppStartupSessionCheck = () => {
    return (dispatch) => {
        let storedToken = localStorage.getItem('token');
        if(!storedToken){
            
        }
        else {
            let expirationTime = localStorage.getItem('expirationTime');
            let currentTime = new Date().getTime();
            if(currentTime >= expirationTime){
                dispatch(userLogout());                
            }
            else {
                let authInfo = {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('userId'),
                    email: jwtDecode(localStorage.getItem('token')).email
                }
                dispatch(loginSuccess(authInfo));
                let expiresIn = expirationTime - currentTime;
                setTimeout(() => dispatch(userLogout()), expiresIn);
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

const userSignupFailure = (error) => {
    return {
        type: actionTypes.USER_SIGNUP_FAILURE,
        payload: error
    }
}

export const asyncUserSignupStart = (userInfo, history) => {
    return async (dispatch) => {
        dispatch(userSignupStart());
        let data = userInfo;
        try {
            let response = await Axios.post('/users/signup', data);
            dispatch(userSignupSuccess());
            setTimeout(()=> {
                dispatch(hideOnboardingNotification());
            },3000);
            history.push('/login');
        }
        catch(e){
            console.log(e);
            if(e.response && e.response.data){
                dispatch(userSignupFailure(e.response.data));
            } else {
                dispatch(userSignupFailure(e));
            }
        }   
    }
}


export const clearAuthError = () => {
    return {
        type: actionTypes.CLEAR_AUTH_ERROR
    }
}


export const hideOnboardingNotification = () => {
    return {
        type: actionTypes.HIDE_ONBOARDING_NOTIFICATION
    }
}