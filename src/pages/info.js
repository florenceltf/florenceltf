import React from 'react';
import Link from 'gatsby-link';
import MediaQuery from 'react-responsive';
import { MOBILE_MAX_DEVICE_WIDTH } from '../util/config';

function Content() {
  return (
    <div className="Content">
      is a Melbourne-born communications designer taking time off to travel. Currently freelancing remotely with Melbourne-based design studio, <a href="https://www.round.com.au">Round</a>. 
      <br></br><br></br>
      Clients worked with while at Round include: Andrew McConnell Group, <a href="http://wp.architecture.com.au/venicebiennale/">Australian Institute of Architects</a>, <a href="http://www.thebiggroup.com.au/">The Big Group</a>, <a href="http://jiff.com.au/">Jewish International Film Festival</a>, <a href="https://lovingearth.co/">Loving Earth</a>, <a href="http://www.melbournefoodandwine.com.au/">Melbourne Food & Wine Festival</a> and <a href="http://siloarttrail.com/">Silo Art Trail</a>.
      <br></br><br></br>
      For any portfolio or freelance enquiries, please <a href="mailto:florenceltf@gmail.com">email</a>. For any other enquiries, please still <a href="mailto:florenceltf@gmail.com">email</a>.
    </div>
  );
}

function Links() {
  return (
    <div className="Links">
      <a href="https://www.linkedin.com/in/florenceltf">CV</a>
      <br></br>
      <a href="https://www.instagram.com/florenceltf">Instagram</a>
      <br></br>
      <a href="mailto:florenceltf@gmail.com">Contact</a>
      <br></br>
    </div>
  );
}

function InfoPageMobile({ data }) {
  return (
    <div className="InfoPageMobile">
      <div className="Header">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </div>
      <Content />
      <br></br>
      <Links />
    </div>
  );
}

function InfoPageDesktop({ data }) {
  return (
    <div className="InfoPageDesktop">
      <div className="Header">
        <span className="Title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </span>
        <span className="Info">Information</span>
      </div>
      <div className="Body">
        <div className="Left">
          <Content />
        </div>
        <div className="Right">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default function InfoPage(props) {
  return (
    <div className="InfoPage">
      <MediaQuery maxDeviceWidth={MOBILE_MAX_DEVICE_WIDTH}>
        {matches => (
          matches ?
          <InfoPageMobile {...props} /> :
          <InfoPageDesktop {...props} />
        )}
      </MediaQuery>
    </div>
  );
}

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`;
