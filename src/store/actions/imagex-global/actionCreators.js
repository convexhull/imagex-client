import * as actionTypes from './actionTypes';

export const setActivePlatform = (payload) => {
    return {
        type: actionTypes.SET_ACTIVE_PLATFORM,
        payload
    }
}