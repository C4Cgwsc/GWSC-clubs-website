import React from 'react';
import {Link} from 'react-router-dom';
// Components
import {Header} from '../Header.js';
import {Footer} from '../Footer.js';
import {NavBar} from '../NavBar.js';
import {SideBar} from '../SideBar.js';

export const Join = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="content">
        <div className="sidebar">
          <SideBar />
        </div>
          <main>
            <h1>Check out all of these clubs!</h1>

          </main>
      </div>
      <Footer />
    </div>
  );
}
