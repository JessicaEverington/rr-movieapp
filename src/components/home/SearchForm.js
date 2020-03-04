import React, { Component } from 'react';
// connecting to store/ redux
import {connect} from 'react-redux';
// getting access to the searchMovie action for our Fn
import {searchMovie, fetchMovies} from '../../actions/searchActions'

export class SearchForm extends Component {
    onChange = e => {
        // we'll take the input value and pass it to SEARCHMOVIE actions
        this.props.searchMovie(e.target.value);
        // now when the value of the input changes the state will change - so we need Redux
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1>Search for a movie or TV show...</h1>
                    <form 
                    id="searchForm" 
                    onSubmit={this.onSubmit}
                    >
                        <div className="form-group row mx-0">
                            <div className="col-10 mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="searchText"
                                    placeholder="Enter something to search"
                                    onChange={this.onChange}
                                >
                                </input>
                                <button
                                type="submit"
                                className="btn btn-info col-4 mt-4">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // state is the global state and movies is our searchReducer
    text: state.movies.text
})
//connect first param maps state to props, second param is the actions used in component
// mapStateToProps is destructuring
export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchForm);