import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src="./assets/logo.svg" className="app-logo" alt="logo" />
                    <h1 className="app-title">Welcome to React</h1>
                </header>
            </div>
        );
    }
}
