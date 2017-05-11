import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gallery from '../components/Gallery';
import { styleLight } from '../actions';

class GalleryContainer extends Component {
    componentDidMount() {
        this.props.onLoad()
    }
    
    render() {
        const props = this.props;
        return (
                <Gallery {...props} />
        );
    }
}

const mapStateToProps = (state) => {
    const { gallery, style } = state;
    return {
        ...gallery,
        style
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(styleLight())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GalleryContainer);
