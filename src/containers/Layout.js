import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Navigation from '../components/Navigation';

const Layout = ({children, style}) => {
    return (
        <div className={"Layout " + style}>
        <div className="Header">
        <Title />
        <Navigation />
        </div>
            {children}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const { style } = state;
    const props =  {
        ...ownProps,
        style
    };
    return props;
};

export default withRouter(connect(mapStateToProps)(Layout));
