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

export const asyncSimilarImagesSearchStart = (data) => {
    return async (dispatch) => {
        dispatch(similarImagesSearchStart());
        let formData = new FormData();
        formData.append("file", data.file);
        try {
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            let apiResponse = await Axios.post(`/computer-vision/getSimilarImages`, formData, config) ;
            console.log(apiResponse.data);
        }
        catch(e){
            console.log(e);
        }
    }
}