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
    count: 4,
    page: 1,
    searchPage: 1,
    term: '',
    search: false,
    newSearch: false,
    blankSearch: false,
    inputValue: ''
  };

  componentDidMount() {
    const { page, count } = this.state;
      axios
        .get(`/api/photos?page=${page}&count=${count}`)
        .then(res => this.setState({ images: res.data }));
    // To prevent same images being fetched upon scrolling (in the first call to fetchImages)
    this.setState({ page: page + count });
  }

  fetchImages = () => {
    const { page, count, images } = this.state;
    this.setState({ page: page + 1 });
    axios
      .get(`/api/photos?page=${page}&count=${count}`)
      .then(res =>
        this.setState({ images: images.concat(res.data) })
      );
  }

  fetchSearchImages = () => {
    const { searchPage, count, term, searchImages } = this.state;

    this.setState({ searchPage: searchPage + 1, inputValue: '' });

    axios
      .get(`/api/photos/search?term=${term}&page=${searchPage}&count=${count}`)
      .then(res =>
        this.setState({
          searchImages: searchImages.concat(res.data.results)
        })
      );
  }

  // Necessary to place fetchSearchImages in a setState callback to ensure other state is set first
  handleSubmit = () => {
    if (!this.state.inputValue) {
      this.setState({
        images: [],
        blankSearch: true,
        newSearch: false,
        search: false,
        searchImages: [],
        searchPage: 1,
        page: 1,
      }, this.fetchImages);
    } else {
      this.setState({
        term: this.state.inputValue,
        searchImages: [],
        searchPage: 1,
        page: 1,
        search: true,
        newSearch: true
      }, this.fetchSearchImages);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e
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
        {this.state.newSearch || this.state.search ? this.state.searchImages.map(image =>
          <Image key={image.id + Math.random()} image={image} />
        ) : this.state.blankSearch ? this.state.images.map(image =>
          <Image key={image.id + Math.random()} image={image} />
        ) : this.state.images.map(image =>
          <Image key={image.id + Math.random()} image={image} />
        )}
      </InfiniteScroll>
      </div>

      </>
    );
  }
}

export default Images;