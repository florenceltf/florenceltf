import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
        <div className="Navigation">
        <Link to="/information">Information</Link>
        <Link to="/" className="back">{"\u21BB"}</Link>
        </div>
);

export default Navigation;
