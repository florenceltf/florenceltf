import React from 'react';
import { connect } from 'react-redux';

import Gallery from '../components/Gallery';

const GalleryContainer = (props) => (
        <Gallery {...props} />
);

const mapStateToProps = (state) => {
    const { gallery } = state;
    return {
        ...gallery
    }
};

export default connect(mapStateToProps)(GalleryContainer);
