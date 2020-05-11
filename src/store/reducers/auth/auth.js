import * as actionTypes from '../../actions/auth/actionTypes';

const initialState = {
    token: null,
    userId: '',
    loading: false
};



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state, 
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loading: false,
                userId: action.payload.userId
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: '',
                loading: false
            }
        default: 
            return state;
    }
};



export default reducer;