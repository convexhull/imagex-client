import * as actionTypes from '../../actions/unsplash/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    page: 1,
    loading: false
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true
            })
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_SUCCESS:
            return updateObject(state, {
                images: action.payload.images
            })
        default: 
            return state;
    }
}


export default reducer;