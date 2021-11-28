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
import TeaseSiblings_logo from './Clubs/Assets/TeaseSiblings_logo.jpeg';
import TechCrew_logo from './Clubs/Assets/TechCrew_logo.jpg'
import RoboticsClub_logo from './Clubs/Assets/RoboticsClub_logo.png';
import FCSC_logo from './Clubs/Assets/FCSC_logo.png';
import LibraryAmbassadors_logo from './Clubs/Assets/LibraryAmbassadors_logo.jpeg';
import DynamicDanceClub_logo from './Clubs/Assets/DynamicDanceClub_logo.png';

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
            <h2>Suggested clubs:</h2>
            <div class='gallery'>
              <Link to='/clubs/ChatForChange'><img className="gallery-image" src={ChatForChange_logo} alt="Chat for Change"/></Link>
              <Link to='/clubs/TechCrew'><img className="gallery-image" src={TechCrew_logo} alt="Tech Crew"/></Link>
              <Link to='/clubs/FCSC'><img className="gallery-image" src={FCSC_logo} alt="Fundraising and Community Services Comittee"/></Link>
            </div>
          </main>
      </div>
      <Footer />
    </div>
  );
}
