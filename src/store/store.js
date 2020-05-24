import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from './reducers/auth/auth';
import unsplashReducer from './reducers/unsplash/unsplash';


const rootReducer = combineReducers({
    auth: authReducer,
    unsplash: unsplashReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
export default store;