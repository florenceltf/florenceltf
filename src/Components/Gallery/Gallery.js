import React, { Component } from 'react';
import ImagesArray from './images';

import './Gallery.css';
/**
 * This is a dumb component, however it needs a state
 * since it will be changeing every x seconds.
 */
class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageIndex: 0,
      images: ImagesArray,
    };
  }

  componentDidMount() {
    this._startPolling();
  }

  componentWillUnmount() {
    this._stopPolling();
  }

  _startPolling() {
    const self = this;
    setTimeout(() => {
      self.poll(); // do it once and then start it up ...
      self.timer = setInterval(self.poll.bind(self), 5000);
    }, 1000);
  }

  _stopPolling() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  poll() {
    const length = this.state.images.length;
    let imageIndex = this.state.imageIndex;
    if (imageIndex < length - 1) {
      imageIndex += 1;
    } else {
      imageIndex = 0;
    }

    this.setState({
      ...this.state,
      imageIndex,
    });
  }

  render() {
    return (
      <div className="gallery">
        <img className="gallery-image" src={this.state.images[this.state.imageIndex]} alt="THUMB_1" />
        <span className="hover-text">Image credits....the internet</span>
      </div>
    );
  }
}

export default Gallery;
