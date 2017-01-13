import React, { PropTypes } from 'react';

import './Header.css';

const Header = props => (
  <header>
    <span onClick={props.showHome} className={props.spanClass}>Florence Li Ting Fong</span>
  </header>
);

Header.defaultProps = {
  showHome: () => {},
  spanClass: '',
};

Header.propTypes = {
  showHome: PropTypes.func,
  spanClass: PropTypes.string,
};

export default Header;
