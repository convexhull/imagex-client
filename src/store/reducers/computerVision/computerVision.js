import * as actionTypes from '../../actions/computerVision/actionTypes';
import updateObject from '../../../utils/updateObject';


const initState = {
    similarImages: [],
    uploadedImageId: '',
    loading: false
}



const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.CV_IMAGE_UPLOAD_START:
            return updateObject(state, {
                loading: true
            });
        case actionTypes.CV_IMAGE_UPLOAD_SUCCESS:
            return updateObject(state, {
                uploadedImageId: action.payload.uploadedImageId,
                loading: false
            });
        case actionTypes.CV_IMAGE_UPLOAD_FAILURE:
            return updateObject(state, {
                loading: false
            });
        default:
            return state;
    }
};


export default reducer;

