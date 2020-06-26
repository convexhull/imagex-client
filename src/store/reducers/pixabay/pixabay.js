import * as actionTypes from '../../actions/pixabay/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    page: 1,
    loading: false
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_SUCCESS:
            return updateObject(state, {
                images: action.payload.images
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_FAILURE:
            return state;
        default: 
            return state;
    }
}


export default reducer;