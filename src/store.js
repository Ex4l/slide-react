import { createStore } from 'redux';
import slides from './reducers/slides';

let store = createStore(slides);

export default store;