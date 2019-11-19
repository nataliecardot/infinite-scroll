import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

export class Images extends Component {
  // This is alternative class component syntax - class field declarations, allows you to initialize local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them. See https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax and https://www.robinwieruch.de/react-state-without-constructor
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    // Will be at 1, then 31 (1 + 30), then 61 (31 + 30), and so forth
    this.setState({start: this.state.start + count});
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={
            <div className="loader-dots">
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
            </div>
          }
        >
          {this.state.images.map(image =>
            <Image key={image.id} image={image} />
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;