import React, { Component } from 'react'
import SearchForm from './SearchForm'
import {connect} from 'react-redux' // anytime we refer to STAES we need the connection
import Spinner from '../layout/Spinner'
import MoviesContainer from './MoviesContainer'


export class Home extends Component {
    render() {
        const {loading} = this.props.loading
        return (
            <div>
                <SearchForm />
                <div className="container">
                    {loading ? <Spinner /> : <MoviesContainer />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Home)