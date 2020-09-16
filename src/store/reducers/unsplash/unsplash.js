import * as actionTypes from '../../actions/unsplash/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    loading: false,
    randomImage: '',
    redirectUrl: '',
    moreResults: true
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true,
                moreResults: true
            })
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_SUCCESS:
            return updateObject(state, {
                images: [...state.images, ...action.payload.results],
                moreResults: action.payload.moreResults,
                loading: false
            })
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_FAILURE:
            return updateObject(state, {
                moreResults: false,
                loading: false
            })
        case actionTypes.UNSPLASH_GET_RANDOM_IMAGE:
            return updateObject(state, {
                randomImage: action.payload.image
            })
        case actionTypes.UNSPLASH_CLEAR_ALL_IMAGES:
            return updateObject(state, {
                images: [],
                loading: false,
                moreResults: true
            })
        case actionTypes.UNSPLASH_CLEAR_RANDOM_IMAGE:
            return updateObject(state, {
                randomImage: ''
            })
        default: 
            return state;
    }
}


export default reducer;