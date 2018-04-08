import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.scss'

function getClassForPath(pathname) {
  switch (pathname) {
    case '/info':
      return 'inverted';
    default:
      return '';
  }
}

const TemplateWrapper = ({ children, location: { pathname } }) => (
  <div className={`Layout ${getClassForPath(pathname)}`}>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
