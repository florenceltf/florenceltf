import React, { PropTypes } from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <a href="#" onClick={props.showInformation} className="align-left">Information</a>
      <a href="#" onClick={props.showIndex}className="align-right">Index</a>
    </div>
  );
};

Footer.defaultProps = {
  showInformation: () => {},
  showIndex: () => {},
};

Footer.propTypes = {
  showInformation: PropTypes.func,
  showIndex: PropTypes.func,
};

export default Footer;
