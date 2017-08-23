import { createStore } from 'redux';
import slideReducer from './reducers/slideReducer';

const store = createStore(slideReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;