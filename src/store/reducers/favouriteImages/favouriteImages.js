import * as actionTypes from '../../actions/favouriteImages/actionTypes';
import updateObject from '../../../utils/updateObject';


const initState = {
    images: [],
    loading: false,
    error: false
};


const reducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.SAVE_FAVOURITE_IMAGE_START:
            return updateObject(state,{
                
            });

        case actionTypes.FETCH_FAVOURITE_IMAGES_START:
            return updateObject(state, {

            });

        case actionTypes.FETCH_FAVOURITE_IMAGES_SUCCESS:
            return updateObject(state, {
                
            });

        case actionTypes.FETCH_FAVOURITE_IMAGES_FAILURE:
            return updateObject(state, {

            });
        default: 
            return state;
    }
}


export default reducer;