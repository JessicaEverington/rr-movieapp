import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../../actions/searchActions'
import { Link } from 'react-router-dom';

export class Movie extends Component {

    // lifecycle method
    //  after the page renders, this method is called to fetch the data from our API
    componentDidMount() {
        // we have the ID in the link so fetching it from there
        // we get params.id from the Route in App.js
        this.props.fetchMovie(this.props.match.params.id);
        //this.props.match.params.id   is the obj path to the imdbID
        // this.props.setLoading(); // meh, no loader
        }
        render() {
        const { loading, movie } = this.props;
        let movieInfo = (
                <div className="card mb-3 bg-light">
                    <div className="card-body mx-0 row"> 
                        <div className="col-6 col-md-4" >
                            <img 
                            className="img-fluid" 
                            src={movie.Poster} 
                            alt="OMDB movie poster" />
                        </div>
                        <div className="col-12 col-md-5">
                            <h1 className="card-title">{movie.Title}</h1>
                            <p className="card-text">{movie.Plot}</p>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Genre:</strong> {movie.Genre}
                                </li>
                                <li className="list-group-item">
                                    <strong>Released:</strong> {movie.Released}
                                </li>
                                <li className="list-group-item">
                                    <strong>Rated:</strong> {movie.Rated}
                                </li>
                                <li className="list-group-item">
                                    <strong>IMDB Rating:</strong> {movie.imdbRating}
                                </li>
                                <li className="list-group-item">
                                    <strong>Director:</strong> {movie.Director}
                                </li>
                                <li className="list-group-item">
                                    <strong>Writer:</strong> {movie.Writer}
                                </li>
                                <li className="list-group-item">
                                    <strong>Actors:</strong> {movie.Actors}
                                </li>
                            </ul>

                            <Link to="/" className="btn btn-secondary col-12 col-md-5 mt-3">
                            Back
                            </Link>
                        </div>
                    </div>
                </div>
        );
        //ternary - do we have content? Y- then load it
        let content = loading ? 'still loading' : movieInfo;
        // give me my content
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie
    // loading: state.movies.loading, //not doing loader
})

export default connect(mapStateToProps, {fetchMovie})(Movie)
