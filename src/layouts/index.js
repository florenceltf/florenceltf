import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.css'

function getClassForPath(pathname) {
  switch (pathname) {
    case '/info':
      return 'inverted';
    default:
      return '';
  }
}

const TemplateWrapper = ({ children, data, location: { pathname }, match: { path } }) => (
  <div className={`Layout ${getClassForPath(pathname)}`}>
    <div className="Header">
      <div className="title">
        {
          pathname !== '/info' ? 
            data.site.siteMetadata.title : 
            <Link to ="/">{data.site.siteMetadata.title}</Link>
        }
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
