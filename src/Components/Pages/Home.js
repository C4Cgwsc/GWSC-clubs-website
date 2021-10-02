import React from 'react';
import {Link} from 'react-router-dom';
// Styles
import './Home.css';
// Components
import {Header} from '../Header.js';
import {Footer} from '../Footer.js';
import {NavBar} from '../NavBar.js';
import {SideBar} from '../SideBar.js';

export const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="content">
        <div className="sidebar">
          <SideBar />
        </div>
          <main>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br />
            <h2>Visit Our Club pages</h2>
            <table border='0' width='100%'>
              <tr>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
              </tr>
              <tr>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
              </tr>
              <tr>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
                <td><div className="fakeimg">Image</div></td>
              </tr>
            </table>
          </main>
      </div>
      <Footer />
    </div>
  );
}
