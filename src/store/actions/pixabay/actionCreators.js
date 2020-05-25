import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';

const pixabayImageKeywordSearchStart = () => {
    return {
        type: actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_START
    }
}

const pixabayImageKeywordSearchSuccess = (payload) => {
    return {
        type: actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_SUCCESS,
        payload
    }
}


export const pixabayImageSearchByKeyword = (keyword) => {
    return async (dispatch) => {
        dispatch(pixabayImageKeywordSearchStart());
        try {
            let apiResponse = await Axios.get(`/pixabay/searchPhotos?keywords=${keyword}`);
            let payload = {images: apiResponse.data.images};
            dispatch(pixabayImageKeywordSearchSuccess(payload));
        }
        catch(e){
            console.log(e);
        }
    }
}