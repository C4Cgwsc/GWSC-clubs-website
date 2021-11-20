import React from 'react';
import {Link} from 'react-router-dom';
// Styles
import './Home.css';
// Components
import {Header} from '../Header.js';
import {Footer} from '../Footer.js';
import {NavBar} from '../NavBar.js';
import {SideBar} from '../SideBar.js';
// Club logos
import ChatForChange_logo from "./Clubs/Assets/ChatForChange_logo.jpeg";
import DaReadingClub_logo from './Clubs/Assets/DaReadingClub_logo.png';
import CAC_logo from './Clubs/Assets/CAC_logo.png';
import VolleyballClub_logo from './Clubs/Assets/VolleyballClub_logo.png';
import ViReal_logo from './Clubs/Assets/ViReal_logo.jpg';
import MUN_logo from './Clubs/Assets/MUN_logo.png';

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
            <div class='gallery'>
              <Link to='/clubs/ChatForChange'><img className="gallery-image" src={ChatForChange_logo} alt="Chat for Change"/></Link>
              <Link to='/clubs/DaReadingClub'><img className="gallery-image" src={DaReadingClub_logo} alt="Da Reading Club"/></Link>
              <Link to='/clubs/CommunityArtsCouncil'><img className="gallery-image" src={CAC_logo} alt="Community Arts Council"/></Link>
              <Link to='/clubs/VolleyballClub'><img className="gallery-image" src={VolleyballClub_logo} alt="Volleyball Club"/></Link>
              <Link to='/clubs/ViReal'><img className="gallery-image" src={ViReal_logo} alt="ViReal"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
              <Link><img className="gallery-image"/></Link>
            </div>
          </main>
      </div>
      <Footer />
    </div>
  );
}
