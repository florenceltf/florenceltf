import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.css'

import Header from '../components/Header';

const TemplateWrapper = ({ children, data }) => (
  <div className="Layout">
    <div className="Header">
      <div className="title">
          {data.site.siteMetadata.title}
      </div>
      <div className="info">
        <Link to="/info">
          Information
        </Link>
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
