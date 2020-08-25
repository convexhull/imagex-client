import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';

const saveFavouriteImagesStart = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_START
    }
}



const saveFavouriteImagesSuccess = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_SUCCESS
    }
}



const saveFavouriteImagesFailure = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_FAILURE
    }
}



export const asyncFetchFavouriteImagesStart = () => {
    return (dispatch) => {
        dispatch(saveFavouriteImagesStart());
        try {

        } catch(e) {
            
        }
    }
}

const saveFavouriteImageStart = () => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_START
    }
}



const saveFavouriteImageSuccess = () => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_SUCCESS
    }
}



const saveFavouriteImageFailure = () => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_FAILURE
    }
}



export const asyncSaveFavouriteImageStart = (image) => {
    return async (dispatch) => {
        dispatch(saveFavouriteImageStart());
        let data = {
            
        }
        let token = localStorage.getItem('token');
        if(!token) {
            return alert('Please login to use this feature');
        }
        let config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }
        console.log("image", image);
        try {
            let apiResponse = await Axios.post('/image-list/saveImage', image, config);
            
        } catch(e) {
            
        }
    }
}