import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';

const similarImagesSearchStart = () => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_START
    }
}

const similarImagesSearchSuccess = () => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_SUCCESS
    }
}


const similarImagesSearchFailure = () => {
    return {
        type: actionTypes.SIMILAR_IMAGES_SEARCH_FAILURE
    }
}


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

export const asyncCvImageUploadStart = (data) => {
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


export const asyncSimilarImagesSearchStart = (data) => {
    return async (dispatch) => {
        dispatch(similarImagesSearchStart());
        
    }
}