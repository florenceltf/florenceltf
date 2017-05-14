import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({ content, contact }) => (
        <div className="InfoContainer">
        <div className="exit"><Link to="/">Close</Link></div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content}} />
        <div className="contact" dangerouslySetInnerHTML={{ __html: contact }} />
        </div>
);

export default Info;
