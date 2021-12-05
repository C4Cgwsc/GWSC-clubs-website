import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// Styles
import './SideBar.css';

export const SideBar = () => {
  return (
    <div>
      <h3>Check them out!</h3>
      <Link to='/clubs/chatforchange'>Chat for Change</Link>
      <br />
      <Link to='/clubs/communityartscouncil'>Community Arts Council</Link>
      <br />
      <Link to='/clubs/techcrew'>Tech Crew</Link>
      <br />
      <Link to='/clubs/fcsc'>FCSC</Link>
      <br />
      <Link to='/clubs/roboticsclub'>Robotics Club</Link>
    </div>
  );
}
