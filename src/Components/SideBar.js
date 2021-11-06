import React from 'react';
import {Link} from 'react-router-dom';
// Styles
import './SideBar.css';

export const SideBar = () => {
  return (
    <div>
      <h3>Suggested:</h3>
      <Link to='/clubs/chatforchange'>Chat for Change</Link>
    </div>
  );
}
