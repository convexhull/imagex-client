import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from './reducers/auth/auth';
import unsplashReducer from './reducers/unsplash/unsplash';
import pixabayReducer from './reducers/pixabay/pixabay';
import computerVisionReducer from './reducers/computerVision/computerVision';
import favouriteImagesReducer from './reducers/favouriteImages/favouriteImages';


const rootReducer = combineReducers({
    auth: authReducer,
    unsplash: unsplashReducer,
    pixabay: pixabayReducer,
    cv: computerVisionReducer,
    favourites: favouriteImagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
export default store;