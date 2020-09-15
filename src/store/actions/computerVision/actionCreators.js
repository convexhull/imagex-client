import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';




const cvImageUploadStart = () => {
    return {
        type: actionTypes.CV_IMAGE_UPLOAD_START
    }
}

const cvImageUploadFailure = () => {
    return {
        type: actionTypes.CV_IMAGE_UPLOAD_FAILURE
    }
}


const cvImageUploadSuccess = (payload) => {
    return {
        type: actionTypes.CV_IMAGE_UPLOAD_SUCCESS,
        payload
    }
}

export const asyncCvImageUploadStart = (data, history) => {
    return async (dispatch) => {
        dispatch(cvImageUploadStart());
        let formData = new FormData();
        formData.append("file", data.file);
        try {
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            let apiResponse = await Axios.post(`/computer-vision/uploadImage`, formData, config);
            if(apiResponse.data.upload_id){
                let payload = {
                    uploadedImageId: apiResponse.data.upload_id
                }
                history.push('/photos/computer-vision');
                dispatch(cvImageUploadSuccess(payload));
            } 
            else {
                throw new Error("Upload id not found");
            }
        }
        catch(e){
            console.log(e);
            dispatch(cvImageUploadFailure());
        }
    }
}



const similarImagesSearchStart = () => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_START
    }
}

const similarImagesSearchSuccess = (payload) => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_SUCCESS,
        payload
    }
}


const similarImagesSearchFailure = () => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_FAILURE
    }
}


export const asyncSimilarImagesSearchStart = (data) => {
    return async (dispatch) => {
        dispatch(similarImagesSearchStart());
        let similarImageSearchURL = `/computer-vision/getSimilarImages?upload_id=${data.uploadedImageId}&page=${data.page}`;
        try {
            let apiResponse = await Axios.get(similarImageSearchURL);
            let payload = apiResponse.data.data;
            dispatch(similarImagesSearchSuccess(payload));
        } catch(e) {
            console.log(e);
            dispatch(similarImagesSearchFailure(e));
        }
    }
}


export const cvClearPreviousSearch = () => {
    return {
        type: actionTypes.CV_CLEAR_PREVIOUS_SEARCH
    }
}