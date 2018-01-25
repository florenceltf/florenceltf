import React from 'react';
import Link from 'gatsby-link'

export default function InfoPage() {
  return (
    <div className="Info">
      <div className="left">is a Melbourne-born communications designer taking time off to eat, drink and nap <a href="http://holidaze.florenceltf.com/">around the world</a>. Currently freelancing abroad with <a href="https://www.round.com.au">Studio Round</a>. 
      <br></br><br></br>
      For any portfolio or freelance enquiries, please <a href="mailto:florenceltf@gmail.com">email</a>. For any other enquiries, still please <a href="mailto:florenceltf@gmail.com">email</a>.
    </div>

      <div className="right">
        <a href="http://holidaze.florenceltf.com/">News</a>
        <br></br>
        <a href="https://www.instagram.com/florenceltf">Instagram</a>
        <br></br>
        <a href="https://www.linkedin.com/in/florenceltf">Linkedin</a>
        <br></br>
        <a href="mailto:florenceltf@gmail.com">Contact</a>
        <br></br>
      </div>
      <div className="Back">
      <Link to="/0">
        Back &#8617;
        </Link>
      </div>
    </div>



  );
}
