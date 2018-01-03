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
  console.log('index', index);
  console.log('length', length);
  const resolutions =
    get(data, 'allFile.edges[0].node.childImageSharp.resolutions');

  return(
    <div>
      <span className="Index">{pad(index, 2)}</span>
      <Link to={nextLink(index, length)}>
        <Img resolutions={resolutions} />
      </Link>
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
            resolutions {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;

export default SlideshowTemplate;
