import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Navigation from './src/screens/Navigation';
 
const initialState = {
  counter: 0
}
 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1};
    case 'DECREMENT':
      return {...state, counter: state.counter - 1};
  }
  return state;
}
 
const store = createStore(reducer);
 
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}