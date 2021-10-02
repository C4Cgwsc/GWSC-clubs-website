import React from 'react';
import {Link} from 'react-router-dom';
// Styles
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <span><Link to='/' className='a'>Home</Link></span>
       <span><Link to='/join' className='a'>Join a club</Link></span>
       <span><Link to='/contact' className='a'>Contact us</Link></span>
    </nav>
  );
}
