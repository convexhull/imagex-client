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
            let payload = {images: apiResponse.data.images};
            dispatch(unsplashImageKeywordSearchSuccess(payload));
        }
        catch(e){
            console.log(e);
        }
    }
}



const unsplashGetHeroImage = (payload) => {
    return {
        type: actionTypes.UNSPLASH_GET_RANDOM_HERO_IMAGE,
        payload
    }
}

export const asyncUnsplashGetRandomHeroImage = () => {
    return async (dispatch) => {
        try {
            let apiResponse = await Axios.get('/unsplash/randomPhoto');
            let payload = {
                image: apiResponse.data
            }
            dispatch(unsplashGetHeroImage(payload));
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
            dispatch(unsplashGetHeroImage(payload));
        }
    }
}


export const unsplashClearAllImages = () => {
    return {
        type: actionTypes.UNSPLASH_CLEAR_ALL_IMAGES
    }
}



