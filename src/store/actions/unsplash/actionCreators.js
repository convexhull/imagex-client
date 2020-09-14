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


export const unsplashImageSearchByKeyword = (keyword, page) => {
    return async (dispatch) => {
        dispatch(unsplashImageKeywordSearchStart());
        try {
            let apiResponse = await Axios.post(`/unsplash/searchPhotos?keywords=${keyword}&page=${page}`);
            let payload = {...apiResponse.data.data , moreResults : (apiResponse.data.data.total_pages > page ? true : false)};
            dispatch(unsplashImageKeywordSearchSuccess(payload));
        }
        catch(e){
            console.log(e);
        }
    }
}



const unsplashGetRandomImage = (payload) => {
    return {
        type: actionTypes.UNSPLASH_GET_RANDOM_IMAGE,
        payload
    }
}

export const asyncUnsplashGetRandomImage = () => {
    return async (dispatch) => {
        try {
            let apiResponse = await Axios.get('/unsplash/randomPhoto');
            let payload = {
                image: apiResponse.data
            }
            dispatch(unsplashGetRandomImage(payload));
        }
        catch(e){
            console.log(e);
            let payload = {};
            if(e.response){
                payload = {
                    error: e.response.data
                }
            }
            else {
                payload = {
                    error : e
                }
            }
            dispatch(unsplashGetRandomImage(payload));
        }
    }
}


export const unsplashClearRandomImage = () => {
    return {
        type: actionTypes.UNSPLASH_CLEAR_RANDOM_IMAGE
    }
}


export const unsplashClearAllImages = () => {
    return {
        type: actionTypes.UNSPLASH_CLEAR_ALL_IMAGES
    }
}



