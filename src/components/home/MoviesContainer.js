import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'

export class MoviesContainer extends Component {
    // map through movies state object and display movie card IF we have movies
    render() {
        const {movies} = this.props;
        let content = '';
        console.log(movies);

        // ternary: does movies have length? Yes-map the movies so each results displays the way I want
        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) : console.log('no movies yet');
        console.log(content) // content is undefined

        return (
            <div className="card-group">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // parent state object and inside we have all our app states
    movies: state.movies.movies
    
})

export default connect(mapStateToProps)(MoviesContainer)