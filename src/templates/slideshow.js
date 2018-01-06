import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import get from 'lodash.get';

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

function SlideshowTemplate({ data, pathContext: { index, length } }) {
  const resolutions =
    get(data, 'allFile.edges[0].node.childImageSharp.resolutions');

  return(
    <div className="Slideshow">
      <div className="item">
        <Link to={nextLink(index, length)}>
          <Img resolutions={resolutions} />
        </Link>
      </div>
      <div className="index">
        <span>{pad(index, 2)}</span>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query SlideByAbsolutePath($absolutePath: String!) {
    allFile(
      filter: { absolutePath: { eq: $absolutePath }}
    ) {
      edges {
        node {
          childImageSharp {
            resolutions(
              width: 650,
              height: 433,
              cropFocus: CENTER,
              quality: 100
            ) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;

export default SlideshowTemplate;
