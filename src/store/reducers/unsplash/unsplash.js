import * as actionTypes from '../../actions/unsplash/actionTypes';
import updateObject from '../../../utils/updateObject';

const initialState = {
    images: [],
    page: 1,
    loading: false,
    heroImageUrl: '',
    redirectUrl: ''
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_START:
            return updateObject(state, {
                loading: true
            })
        case actionTypes.UNSPLASH_IMAGE_KEYWORD_SEARCH_SUCCESS:
            return updateObject(state, {
                images: [...state.images, ...action.payload.images]
            })
        case actionTypes.UNSPLASH_GET_RANDOM_HERO_IMAGE:
            if(action.payload.error){
                let dummyHeroImageUrl = "https://images.unsplash.com/photo-1503900311769-9f25e9f06068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                return updateObject(state,{
                    heroImageUrl: dummyHeroImageUrl
                })
            } else {
                return updateObject(state, {
                    heroImageUrl: action.payload.image.urls.full
                })
            }
        default: 
            return state;
    }
}


export default reducer;