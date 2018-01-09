import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

export default function setupStore(initialState) {
  return createStore(reducers, {...initialState}, applyMiddleware(thunk));
}