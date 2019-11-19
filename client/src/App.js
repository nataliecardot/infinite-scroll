import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="hero is-fullheight has-background-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2">
                Unsplash Infinite Scroll Gallery
              </h1>

              <Images />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
