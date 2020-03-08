import React, {Component} from 'react';
import './App.css';
// adding redux provider - it "provides" the store to app
import {Provider} from 'react-redux';
// using Hashrouter prevents issues with brower routers on deploy
import {HashRouter as Router, Route} from 'react-router-dom'
// adding the components
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Movie from './components/home/Movie';
// adding Redux stire
import store from './store';

class App extends Component {
    // telling it to render
    render() {
        return (
            // Must wrap the app in our provider so it has access to store
            <Provider store={store}>
                <Router>
                {/* Router needs stuff wrapped in a div  */}
                    <div>
                        <Navbar />
                        {/* <Home /> */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movie/:id" component={Movie} />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
