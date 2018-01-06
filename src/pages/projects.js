import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import get from "lodash.get";

const GalleryPage = ({ data }) => {
  console.log('data', data);
  const images = get(data, 'allFile.edges');
  return (
    <div className="Gallery">
      {
        images.map((image, index) =>
          <Link className="GalleryImage" to={`/${index}`}>
            <Img
              resolutions={get(image, 'node.childImageSharp.resolutions')}
            />
          </Link>
        )
      }
    </div>
  );
}

export const pageQuery = graphql`
  query GalleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: {sourceInstanceName: {eq: "gallery"}},
      sort: {order: ASC, fields: [id]}
    ) {
      edges {
        node {
          extension
          dir
          modifiedTime
          sourceInstanceName
          childImageSharp {
            resolutions(
              width: 360,
              height: 240,
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

export default GalleryPage
