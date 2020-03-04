// the reducer will test the action and each action has specific params
import {SEARCH_MOVIE} from '../actions/types';
import {FETCH_MOVIES} from '../actions/types';
import {FETCH_MOVIE} from '../actions/types';

// creating the initial state - how it starts out
const initialState = {
    text: '', // empty string for search text
    movies: [], // empty array for OMDB
    loading: false, // boolean re spinner for data coming from OMDB
    movie: [] // for when I need single movie/ details
}

export default function(state = initialState, action) {
    // this Fn will test the action type
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
            
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }

        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        // always requires a default as well
        default: 
        return state
    }
}