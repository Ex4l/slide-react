import { createStore } from 'redux';
import slides from './reducers/slides';

const store = createStore(slides, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;