import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigation from './src/screens/Navigation';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}