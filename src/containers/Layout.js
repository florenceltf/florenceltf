import React from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';
import Navigation from '../components/Navigation';

const Layout = (props) => {
    const children = props.children
    return (
        <div className={"Layout"}>
        <Title />
        <Navigation />
        {children}
        </div>
    )
};

export default Layout;
