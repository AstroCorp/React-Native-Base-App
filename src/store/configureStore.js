import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import exampleReducer from './reducers/example';

console.disableYellowBox = true;

const client = axios.create({
    baseURL: 'https://api.github.com/users/AstroCorp/repos',
    responseType: 'json'
});

const rootReducer = combineReducers({
    exampleReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(axiosMiddleware(client))));
};

export default configureStore;