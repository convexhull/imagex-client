import * as actionTypes from '../../actions/auth/actionTypes';
// import updateObject from '../../../utils/updateObject';

const initialState = {
    token: null,
    userId: '',
    loading: false,
    redirectUrl: '',
};



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN_START:
            return {
                ...state, 
                loading: true
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loading: false,
                userId: action.payload.userId,
                redirectUrl: '/'
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                token: null,
                userId: '',
                loading: false,
                redirectUrl: ''
            }
        default: 
            return state;
    }
};



export default reducer;