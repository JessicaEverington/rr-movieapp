// index and movie will get passed from parent to child
import React, { Component } from 'react'
// Using Links to replace a-tags and act as routing
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        console.log('running movie card')
        return (
            <div className="col-md-4 text-light">
                <div className="card my-3 mx-3 bg-dark px-3 py-3">
                    <img 
                        className="card-img-top" 
                        src={movie.Poster} 
                        alt="OMDB poster" />

                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">{movie.Year}</p>
                        <Link 
                            to={'movie/'+ movie.imdbID } 
                            className="btn btn-info px-5">
                            See details
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard
