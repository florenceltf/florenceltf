import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import MediaQuery from 'react-responsive';
import { get as _get } from 'lodash';
import { MOBILE_MAX_DEVICE_WIDTH } from '../util/config';

function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

function nextLink(index, length) {
  if (index >= length - 1) {
    return '/0';
  }
  return `/${index+1}`
}

function Slideshow({ index, length, data }) {
  const sizes = _get(data, 'allFile.edges[0].node.childImageSharp.sizes');

  return (
    <div className="Slideshow">
      <Link to={nextLink(index, length)}>
        <Img sizes={sizes} style={{ objectFit: 'contain' }}/>
      </Link>
    </div>
  );
}

function Counter({ index }) {
  return (
    <span className="Counter">{pad(index, 2)}</span>
  );
}

function SlideshowMobileTemplate({ data, pathContext: { index, length } }) {
  return (
    <div className="SlideshowMobileTemplate">
      <div className="Header">{data.site.siteMetadata.title}</div>
      <Slideshow index={index} length={length} data={data} />
      <div className="Footer">
        <span className="Info"><Link to="/info">Information</Link></span>
        <Counter index={index} />
      </div>
    </div>)
  ;
}

function SlideshowDesktopTemplate({ data, pathContext: { index, length }}) {
  return (
    <div className="SlideshowDesktopTemplate">
      <div className="Header">
        <span className="Title">{data.site.siteMetadata.title}</span>
        <span className="Info"><Link to="/info">Information</Link></span>
      </div>
      <div className="Spacer" />
      <div className="Content">
        <Slideshow index={index} length={length} data={data} />
        <div className="CounterContainer">
          <Counter index={index} />
        </div>
      </div>
    </div>
  );
}

function SlideshowTemplate(props) {
  return(
    <MediaQuery maxDeviceWidth={MOBILE_MAX_DEVICE_WIDTH}>
      {matches => (
        matches ?
        <SlideshowMobileTemplate {...props} /> :
        <SlideshowDesktopTemplate {...props} />
      )}
    </MediaQuery>
  );
}

export const pageQuery = graphql`
  query SlideByAbsolutePath($absolutePath: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allFile(
      filter: { absolutePath: { eq: $absolutePath }}
    ) {
      edges {
        node {
          childImageSharp {
            sizes (
              quality: 100
            ) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default SlideshowTemplate;
