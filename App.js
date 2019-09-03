import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigation from './src/screens/Navigation';
import { PersistGate } from 'redux-persist/integration/react';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <StatusBar backgroundColor="#1775C2" barStyle="light-content" />
          <Navigation/>
        </PersistGate>
      </Provider>
    );
  }
}