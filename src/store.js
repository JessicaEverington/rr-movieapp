import {createStore, applyMiddleware} from 'redux'; // bringing Redux
import thunk from 'redux-thunk'; // middleware that lets you call action creators that return a function instead of an action object
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; 
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// middleware enables Redux to deal with other extensions (ie devtools)

export default store;