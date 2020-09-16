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

const pixabayImageKeywordSearchFailure = (error) => {
    return {
        type: actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_FAILURE,
        payload: error
    }
}


export const pixabayImageSearchByKeyword = (keyword, page) => {
    return async (dispatch) => {
        dispatch(pixabayImageKeywordSearchStart());
        try {
            let apiResponse = await Axios.get(`/pixabay/searchPhotos?keywords=${keyword}&page=${page}`);
            let payload = {...apiResponse.data.data};
            dispatch(pixabayImageKeywordSearchSuccess(payload));
        }
        catch(e){
            console.log(e);
            dispatch(pixabayImageKeywordSearchFailure(e));
        }
    }
}



export const pixabayClearAllImages = () => {
    return {
        type: actionTypes.PIXABAY_CLEAR_ALL_IMAGES
    }
}