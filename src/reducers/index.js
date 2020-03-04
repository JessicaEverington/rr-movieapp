//combine all our reducers into 1 reducer umbrella'd under a parent state
import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer
})