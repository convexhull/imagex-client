import * as actionTypes from './actionTypes';
import Axios from '../../../axios/axios';

const fetchFavouriteImagesStart = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_START
    }
}



const fetchFavouriteImagesSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_SUCCESS,
        payload
    }
}



const fetchFavouriteImagesFailure = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_IMAGES_FAILURE
    }
}



export const asyncFetchFavouriteImagesStart = () => {
    return async (dispatch) => {
        dispatch(fetchFavouriteImagesStart());
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
            let apiResponse = await Axios.get('users/favourite-images', config );
            let images = apiResponse.data.data;
            dispatch(fetchFavouriteImagesSuccess(images));
        } catch(e) {
            console.log(e);
            dispatch(fetchFavouriteImagesFailure(e));
        }
    }
}

const saveFavouriteImageStart = () => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_START
    }
}



const saveFavouriteImageSuccess = (payload) => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_SUCCESS,
        payload
    }
}



const saveFavouriteImageFailure = (error) => {
    return {
        type: actionTypes.SAVE_FAVOURITE_IMAGE_FAILURE
    }
}



export const asyncSaveFavouriteImageStart = (image, platform) => {
    return async (dispatch) => {
        dispatch(saveFavouriteImageStart());
        let data = {};
        switch (platform) {
            case "unsplash":
                data = {
                    platform: "unsplash",
                    imageId: image.id,
                    pageUrl: image.links.html,
                    smallImageUrl: image.urls.small,
                    mediumImageUrl: image.urls.regular,
                    largeImageUrl: image.urls.full,
                    downloadUrl: image.links.download
                }
                break;
            case "pixabay":
                data = {
                    platform: "pixabay",
                    imageId: image.id,
                    pageUrl: image.pageURL,
                    smallImageUrl: image.previewURL,
                    mediumImageUrl: image.webformatURL,
                    largeImageUrl: image.largeImageURL,
                    downloadUrl: image.largeImageURL
                }   
                break;
        }
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
            let apiResponse = await Axios.post('/image-list/saveImage', data, config);
            dispatch(saveFavouriteImageSuccess(apiResponse.data));
        } catch(e) {
            dispatch(saveFavouriteImageFailure(e));
        }
    }
}



const removeFavouriteImageStart = () => {
    return {
        type: actionTypes.REMOVE_FAVOURITE_IMAGE_START
    }
}



const removeFavouriteImageSuccess = (payload) => {
    return {
        type: actionTypes.REMOVE_FAVOURITE_IMAGE_SUCCESS,
        payload
    }
}



const removeFavouriteImageFailure = (error) => {
    return {
        type: actionTypes.REMOVE_FAVOURITE_IMAGE_FAILURE
    }
}



export const asyncRemoveFavouriteImageStart = (imageId) => {
    return async (dispatch) => {
        dispatch(removeFavouriteImageStart());
        let token = localStorage.getItem('token');
        if(!token) {
            return alert('Please login to use this feature');
        }
        let config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        };
        console.log("xxx", config)
        try {
            let apiResponse = await Axios.delete(`/users/removeFavouriteImage?imageId=${imageId}`, config);
            dispatch(removeFavouriteImageSuccess(apiResponse.data));
        } catch(e) {
            dispatch(removeFavouriteImageFailure(e));
        }
    }
}




