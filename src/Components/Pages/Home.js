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
            <p>The official GWSC clubs website contains numerous clubs within GWSC to join. Browse through the website, pick a club you like and contact them to join!
            </p>
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
