import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../../actions/searchActions'
import { Link } from 'react-router-dom';

export class Movie extends Component {
    // lifecycle method
    componentDidMount() {
        // we have the ID in the link so fetching it from there
        // we get params.id from the Route in App.js
        this.props.fetchMovie(this.props.match.params.id);
        // console.log(this.props.match.params.id)
    }

    render() {
        const { loading, movie } = this.props;

        let movieInfo = (
            <React.Fragment>
                <div className="card mb-3 text-light bg-dark">
                    <img 
                    className="card-img-top" 
                    src={movie.Poster} 
                    alt="OMDB movie poster" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">{movie.Plot}</p>
                        <p className="card-text"><small className="text-muted">{movie.Genre}</small></p>
                    </div>
                    <Link to="/" className="btn btn-secondary">
                        Back
                    </Link>
                </div>
            </React.Fragment>
        );
        let content = loading ? 'still loading' : movieInfo;
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie,
    // loading: state.movies.loading, //not doing loader
})

export default connect(mapStateToProps, fetchMovie)(Movie)
