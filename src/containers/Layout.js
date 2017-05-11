import React from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => (
        <div className="Layout">
        <Title />
        <Navigation />
        {children}
        </div>
);

export default Layout;
