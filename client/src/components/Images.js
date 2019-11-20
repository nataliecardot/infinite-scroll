import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchInput from './SearchInput';
import Image from './Image';

export class Images extends Component {
  // This is alternative class component syntax - class field declarations, allows you to initialize local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them. See https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax and https://www.robinwieruch.de/react-state-without-constructor
  state = {
    images: [],
    searchImages: [],
    count: 30,
    start: 1,
    searchStart: 1,
    term: '',
    search: false,
    newSearch: false,
    blankSearch: false,
    inputValue: ''
  };

  componentDidMount() {
    const { count, start } = this.state;
      axios
        .get(`/api/photos?count=${count}&start=${start}`)
        .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start, images } = this.state;
    // Will be at 1, then 31 (1 + 30), then 61 (31 + 30), and so forth
    this.setState({ start: start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: images.concat(res.data) })
      );
  }

  fetchSearchImages = () => {
    const { searchStart, count, term, searchImages } = this.state;

    this.setState({ searchStart: searchStart + count });

    axios
      .get(`/api/photos/search?term=${term}&count=${count}&start=${searchStart}`)
      .then(res =>
        this.setState({
          searchImages: searchImages.concat(res.data.results)
        })
      );
  }

  // Necessary to place fetchSearchImages in a setState callback to ensure other state is set first
  handleSubmit = () => {
    if (!this.state.term) {
      this.setState({
        images: [],
        blankSearch: true,
        newSearch: false,
        search: false,
        searchImages: [],
        searchStart: 1,
        start: 1,
      }, this.fetchImages);
    } else {
      this.setState({
        inputValue: '',
        searchImages: [],
        searchStart: 1,
        search: true,
        newSearch: true
      }, this.fetchSearchImages);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      term: e
    });
  }

  render() {
    return (
      <>

      <SearchInput onSearch={this.handleInputChange} value={this.state.inputValue} onFormSubmit={this.handleSubmit} />

      <div className="images">
        <InfiniteScroll
          dataLength={this.state.blankSearch ? this.state.images.length : (this.state.newSearch || this.state.search) ? this.state.searchImages.length : this.state.images.length}
          next={this.state.search ? this.fetchSearchImages : this.fetchImages}
          hasMore={(this.state.images.length || this.state.searchImages.length) ? true : false}
          loader={
            <div className="loader-dots">
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
              <span className="loader-dot"></span>
            </div>
          }
        >
        {this.state.newSearch || this.state.search ? this.state.searchImages.map(image =>
          <Image key={image.id} image={image} />
        ) : this.state.blankSearch ? this.state.images.map(image =>
          <Image key={image.id} image={image} />
        ) : this.state.images.map(image =>
          <Image key={image.id} image={image} />
        )}
      </InfiniteScroll>
      </div>

      </>
    );
  }
}

export default Images;