import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.scss'

import Header from '../components/Header';

function getClassForPath(pathname) {
  switch (pathname) {
    case '/info':
      return 'inverted';
    default:
      return '';
  }
}

const TemplateWrapper = ({ children, data, location: { pathname } }) => (
  <div className={`Layout ${getClassForPath(pathname)}`}>
    <div className="Header">
      <div className="title">
        {data.site.siteMetadata.title}
      </div>
      <div className="info">
        {pathname === '/info' ?
         'Information'
         :
         <Link to="/info">
           Information
         </Link>
        }
      </div>
    </div>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

export const query = graphql`
query TemplateQuery {
  site {
    siteMetadata {
      title
    }
  }
}`;
