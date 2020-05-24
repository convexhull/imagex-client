import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';

const unsplashImageKeywordSearchStart = () => {
    return {
        type: actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_START
    }
}

const unsplashImageKeywordSearchSuccess = (payload) => {
    return {
        type: actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_SUCCESS,
        payload
    }
}


export const unsplashImageSearchByKeyword = (keyword) => {
    return async (dispatch) => {
        dispatch(unsplashImageKeywordSearchStart());
        try {
            let apiResponse = await Axios.post(`/unsplash/searchPhotos?keywords=${keyword}`);
            let payload = {images: apiResponse.data.images};
            dispatch(unsplashImageKeywordSearchSuccess(payload));
        }
        catch(e){

        }
        
    }
}


