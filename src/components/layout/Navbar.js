import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h1 className="navbar-brand">
                React-Redux Movie App
            </h1>
            <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.auth0.com%2Fblog%2Freact-js%2Freact.png&f=1&nofb=1" alt="React icon" 
                className="img-fluid col-1"
            />
        </nav>
    )
}

export default Navbar