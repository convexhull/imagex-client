import * as actionTypes from '../../actions/pixabay/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    loading: false,
    endOfResults: false
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_SUCCESS:
            let newImages = action.payload.images;
            let endOfResults = false;
            if(!newImages.length){
                endOfResults = true;   
            }
            return updateObject(state, {
                images: [...state.images, ...newImages],
                endOfResults: endOfResults
            })
        case actionTypes.PIXABAY_IMAGE_KEYWORD_SEARCH_FAILURE:
            return state;
        case actionTypes.PIXABAY_CLEAR_ALL_IMAGES:
            return updateObject(state, {
                images: []
            })
        default: 
            return state;
    }
}


export default reducer;