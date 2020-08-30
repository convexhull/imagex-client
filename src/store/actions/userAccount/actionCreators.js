import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';


const userProfilePicUpdateStart = () => {
    return {
        type: actionTypes.USER_PROFILE_PIC_UPDATE_START
    }
}

const userProfilePicUpdateSuccess = (payload) => {
    return {
        type: actionTypes.USER_PROFILE_PIC_UPDATE_SUCCESS,
        payload
    }
}


const userProfilePicUpdateFailure = () => {
    return {
        type: actionTypes.USER_PROFILE_PIC_UPDATE_FAILURE
    }
}


export const asyncUserProfilePicUpdateStart = (image) => {
    return async (dispatch) => {
        dispatch(userProfilePicUpdateStart());
        let token = localStorage.getItem('token');
        if(!token) {
            return alert('Please login to use this feature');
        }
        let config = {
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : `multipart/form-data`
            }
        };
        let formData = new FormData();
        formData.append('file', image);
        try {   
            let apiResponse = await Axios.post('/users/updateProfilePic', formData, config);
            dispatch(userProfilePicUpdateSuccess(apiResponse.data.data));
        } catch(e) {
            console.log(e);
            dispatch(userProfilePicUpdateFailure(e));
        }
    }
}




const userAccountUpdateStart = () => {
    return {
        type: actionTypes.USER_ACCOUNT_UPDATE_START
    }
}

const userAccountUpdateSuccess = (payload) => {
    return {
        type: actionTypes.USER_ACCOUNT_UPDATE_SUCCESS,
        payload
    }
}


const userAccountUpdateFailure = (error) => {
    return {
        type: actionTypes.USER_ACCOUNT_UPDATE_FAILURE
    }
}


export const asyncUserAccountUpdateStart = (data) => {
    return async (dispatch) => {
        dispatch(userAccountUpdateStart());
        let token = localStorage.getItem('token');
        if(!token) {
            return alert('Please login to use this feature');
        }
        let config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        };
        try {   
            let apiResponse = await Axios.patch('/users/update', data, config);
            dispatch(userAccountUpdateSuccess(apiResponse.data.data));
        } catch(e) {
            console.log(e);
            dispatch(userAccountUpdateFailure(e));
        }
    }
}

const userFetchAccountStart = () => {
    return {
        type: actionTypes.USER_FETCH_ACCOUNT_START
    }
}


const userFetchAccountSuccess = (payload) => {
    return {
        type: actionTypes.USER_FETCH_ACCOUNT_SUCCESS,
        payload
    }
}


const userFetchAccountFailure = (error) => {
    return {
        type: actionTypes.USER_FETCH_ACCOUNT_FAILURE
    }
}


export const asyncUserFetchAccountStart = (data) => {
    return async (dispatch) => {
        dispatch(userFetchAccountStart());
        let token = localStorage.getItem('token');
        if(!token) {
            return alert('Please login to use this feature');
        }
        let config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        };
        try {   
            let apiResponse = await Axios.get('/users/ownAccountInfo', config);
            dispatch(userFetchAccountSuccess(apiResponse.data.data));
        } catch(e) {
            console.log(e);
            dispatch(userFetchAccountFailure(e));
        }
    }
}