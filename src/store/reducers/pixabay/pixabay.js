import * as actionTypes from '../../actions/pixabay/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    loading: false,
    moreResults: true
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_SUCCESS:
            console.log(action.payload.hits);
            return updateObject(state, {
                images: [...state.images, ...action.payload.hits],
                moreResults: action.payload.moreResults
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_FAILURE:
            return updateObject(state, {
                moreResults: false,
                loading: false
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_FAILURE:
            return state;
        case actionTypes.PIXABAY_CLEAR_ALL_IMAGES:
            return updateObject(state, {
                images: [],
                moreResults: true
            })
        default: 
            return state;
    }
}


export default reducer;