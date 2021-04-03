import { Text, LogBox } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import TextWithDefaultProps from '../types/react-native/textWithDefaultProps';
import exampleReducer from './reducers/exampleReducer';

LogBox.ignoreAllLogs();

((Text as unknown) as TextWithDefaultProps).defaultProps = ((Text as unknown) as TextWithDefaultProps).defaultProps || {};
((Text as unknown) as TextWithDefaultProps).defaultProps.allowFontScaling = false;

const client = axios.create({
	baseURL: 'https://api.github.com/users/AstroCorp/repos',
	responseType: 'json',
});

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
	key: 'example',
	storage: AsyncStorage,
};

const rootReducer = combineReducers({
	exampleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
	const store = createStore(
		persistedReducer,
		composeEnhancers(applyMiddleware(axiosMiddleware(client))),
	);
	const persistor = persistStore(store);

	return { store, persistor };
};

export default configureStore;
