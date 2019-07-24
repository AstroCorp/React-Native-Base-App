import { createStore, combineReducers, compose } from 'redux';
import exampleReducer from './reducers/example';

console.disableYellowBox = true;

const rootReducer = combineReducers({
    exampleReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;