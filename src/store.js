import { createStore } from 'redux';
import slides from './reducers/slides';

let store = createStore(slides, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;