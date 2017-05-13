import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({ content }) => (
        <div className="InfoContainer">
        <div className="exit"><Link to="/">Close</Link></div>
        <div className="content">{content}</div>
        </div>
);

export default Info;
