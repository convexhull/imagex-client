import * as actionTypes from '../../actions/userAccount/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    loading: false,
    userProfileInfo: null,
    profileUpdating: false,
    profileUpdateError: false
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_ACCOUNT_UPDATE_START:
            return updateObject(state, {
                profileUpdating: true
            });
        case actionTypes.USER_ACCOUNT_UPDATE_SUCCESS:
            return updateObject(state, {
                profileUpdating: false
            });
        case actionTypes.USER_ACCOUNT_UPDATE_FAILURE:
            return updateObject(state, {
                profileUpdating: false
            });
        case actionTypes.USER_FETCH_ACCOUNT_START:
            return updateObject(state, {

            });
        case actionTypes.USER_FETCH_ACCOUNT_SUCCESS:
            return updateObject(state, {
                userProfileInfo: action.payload
            });
        case actionTypes.USER_FETCH_ACCOUNT_FAILURE:
            return updateObject(state, {
            });
        case actionTypes.USER_PROFILE_PIC_UPDATE_START:
            return updateObject(state, {
                profilePicUploading: true
            });
        case actionTypes.USER_PROFILE_PIC_UPDATE_SUCCESS:
            return updateObject(state, {
                profilePicUploading: false,
                userProfileInfo: action.payload
            });
        case actionTypes.USER_PROFILE_PIC_UPDATE_FAILURE:
            return updateObject(state, {
                profilePicUploading: false
            });
        default: 
            return state;
    }
};



export default reducer;