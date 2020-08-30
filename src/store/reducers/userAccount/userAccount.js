import * as actionTypes from '../../actions/userAccount/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    loading: false,
    userProfileInfo: null
};



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_ACCOUNT_UPDATE_START:
            return updateObject(state, {
                profilePicUploading: true
            });
        case actionTypes.USER_ACCOUNT_UPDATE_SUCCESS:
            return updateObject(state, {
                profilePicUploading: false,
                userProfileInfo: action.payload
            });
        case actionTypes.USER_ACCOUNT_UPDATE_FAILURE:
            return updateObject(state, {
                profilePicUploading: false
            });
        case actionTypes.USER_FETCH_ACCOUNT_START:
            return updateObject(state, {
                profilePicUploading: true
            });
        case actionTypes.USER_FETCH_ACCOUNT_SUCCESS:
            return updateObject(state, {
                profilePicUploading: false,
                userProfileInfo: action.payload
            });
        case actionTypes.USER_FETCH_ACCOUNT_FAILURE:
            return updateObject(state, {
                profilePicUploading: false
            });
        default: 
            return state;
    }
};



export default reducer;