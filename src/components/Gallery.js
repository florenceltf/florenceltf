import React, { Component } from 'react';

const INTERVAL = 2000;

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), INTERVAL)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick() {
        this.nextImage();
    }

    onClick() {
        this.nextImage();
    }

    nextImage() {
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
                <div className="Gallery">
                <div className="counter">{this.getCounter()}</div>
                <div className="slideshow">
                <img
            src={image.src}
            alt={image.title}
            onClick={this.onClick.bind(this)}
                />
                </div>
                </div>
        )
    };
}


export default Gallery;
