import * as actionTypes from '../../actions/computerVision/actionTypes';
import updateObject from '../../../utils/updateObject';


const initState = {
    similarImages: [],
    uploadedImageId: '',
    imageUploading: false,
    similarImagesLoading: false
}



const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.CV_CLEAR_PREVIOUS_SEARCH:
            return updateObject(state, {
                similarImages: [],
                uploadedImageId: '',
                imageUploading: false,
                similarImagesLoading: false
            })
        case actionTypes.CV_IMAGE_UPLOAD_START:
            return updateObject(state, {
                imageUploading: true,
                uploadedImageId: '',
                similarImages: [],
            });
        case actionTypes.CV_IMAGE_UPLOAD_SUCCESS:
            return updateObject(state, {
                uploadedImageId: action.payload.uploadedImageId,
                imageUploading: false
            });
        case actionTypes.CV_IMAGE_UPLOAD_FAILURE:
            return updateObject(state, {
                imageUploading: false
            });
        case actionTypes.SIMILAR_IMAGES_SEARCH_START:
            return updateObject(state, {
                similarImagesLoading: true
            });
        case actionTypes.SIMILAR_IMAGES_SEARCH_SUCCESS:
            return updateObject(state, {
                similarImages: action.payload.images,
                similarImagesLoading: false
            });
        case actionTypes.SIMILAR_IMAGES_SEARCH_FAILURE:
            return updateObject(state, {
                similarImagesLoading: false
            });
        default:
            return state;
    }
};


export default reducer;

