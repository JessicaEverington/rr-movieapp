// Actions are functions that produce objects
import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE} from './types';
// we'll use Axios to make the Http request
import axios from 'axios';
// bringing in the API key
import {APIKey} from '../APIKey';

// creating a Fn which will take a TEXT param
// inside our Fn we're using another Fn via thunk
export const searchMovie = text => dispatch => {
    dispatch ({
        type: SEARCH_MOVIE,
        payload: text // passing the text through the action into the payload 
    })
}

export const fetchMovies = text => dispatch => {
    console.log('running');
    axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    }, console.log('finished')))
    .catch(error => console.log(error))
}

export const fetchMovie = movieId => dispatch => {
    // send the http request via API and get response
    console.log('running single movie fetch');
    axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${movieId}`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
    }, console.log('finished single movie')))
    .catch(error => console.log(error))
}