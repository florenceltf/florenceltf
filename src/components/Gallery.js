import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    onClick() {
        const state = this.state;
        const index = state.index;
        const len = this.props.content.length;
        const nextIndex = index + 1 < len ? index + 1 : 0;
        this.setState({
            ...state,
            index: nextIndex
        })
    }

    getCounter() {
        const num = this.state.index + 1;
        const numSting = ("0" + num).slice(-2);
        return numSting;
    }
    
    render () {
        const { content } = this.props;
        const image = content[this.state.index];

        return (
                <div className="GalleryContainer">
                <div className="counter">{this.getCounter()}</div>
                <img
            src={image.src}
            alt={image.title}
            onClick={this.onClick.bind(this)}
                />
                </div>
        )
    };
}


export default Gallery;
