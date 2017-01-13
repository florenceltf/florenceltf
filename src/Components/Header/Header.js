import React, { PropTypes } from 'react';

import './Header.css';

const Header = (props) => (
  <header onClick={props.showHome}>
    <span>Florence Li Ting Fong</span>
  </header>
);

Header.defaultProps = {
  showHome: () => {},
};

Header.propTypes = {
  showHome: PropTypes.func,
};

export default Header;
