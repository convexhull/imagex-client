import * as actionTypes from '../../actions/imagex-global/actionTypes';
import updateObject from '../../../utils/updateObject';

const initState = {
    activePlatform: 'unsplash'
}


const reducer = (state = initState, action) => {
    switch(action.type) {   
        case actionTypes.SET_ACTIVE_PLATFORM:
            return updateObject(state,{
                activePlatform: action.payload
            })
        default:
            return state;
    }
}


export default reducer;