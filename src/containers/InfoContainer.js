import React from 'react';
import { connect } from 'react-redux';

import Info from '../components/Info';

const InfoContainer = (props) => (
        <Info {...props} />
);

const mapStateToProps = (state) => {
    const { info } = state;
    return {
        ...info,
    };
}

export default connect(mapStateToProps)(InfoContainer);
