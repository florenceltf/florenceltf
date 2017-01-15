import React, { PropTypes } from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <a onClick={props.showInformation} className={`align-left ${props.spanClass}`}>Information</a>
      <a href="https://www.instagram.com/florenceltf/" className={`align-right ${props.spanClass}`}>Follow</a>
    </div>
  );
};

Footer.defaultProps = {
  showInformation: () => {},
  showIndex: () => {},
  spanClass: '',
};

Footer.propTypes = {
  showInformation: PropTypes.func,
  showIndex: PropTypes.func,
  spanClass: PropTypes.string,
};

export default Footer;
