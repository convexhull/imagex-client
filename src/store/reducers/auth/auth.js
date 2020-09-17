import * as actionTypes from '../../actions/auth/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    token: null,
    userId: '',
    loading: false,
    redirectUrl: '',
    error: '',
    onboardingNotification: false
};


const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.USER_SIGNUP_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                onboardingNotification: true,
                loading: false
            }
        case actionTypes.USER_SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
        case actionTypes.HIDE_ONBOARDING_NOTIFICATION:
            return {
                ...state,
                onboardingNotification: false
            }
        case actionTypes.USER_LOGIN_START:
            return {
                ...state, 
                loading: true,
                error: ''
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loading: false,
                userId: action.payload.userId,
                redirectUrl: '/',
                error: ''
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                token: null,
                userId: '',
                loading: false,
                redirectUrl: ''
            }
        case actionTypes.CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: ''
            }
        
        default: 
            return state;
    }
};



export default reducer;