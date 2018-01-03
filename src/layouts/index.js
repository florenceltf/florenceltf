import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.css'

import Header from '../components/Header';

const TemplateWrapper = ({ children }) => (
  <div className="Layout">
    <Header />
    {children()}
    <Link to="/gallery">Gallery</Link>
    <br />
    <Link to="/info">info</Link>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
