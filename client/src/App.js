import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h1 className="title is-1">
                  Unsplash Infinite Scroll Gallery
                </h1>
              </div>

              <div className="images">

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;