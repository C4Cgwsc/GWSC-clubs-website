import React from 'react';
import {Link} from 'react-router-dom';
// Styles
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Link to='/join'>Join a Club</Link>
      <br />
      <Link to='/contact'>Contact Us</Link>
    </footer>
  );
}
