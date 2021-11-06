import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
//Styles
import './VolleyballClub.css';
// Assets
import logo from "../Assets/VolleyballClub_logo.png";
import isaac from "../Assets/isaac.png";
import austin from "../Assets/AustinL.png";
import joey from "../Assets/joey.jpg";
import kyara from "../Assets/kyara.png";

export const VolleyballClub = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Volleyball Club</h1>
          <p>Club leader: Austin Li</p>
          <br/>

          <h2>What is the objective of the Volleyball Club?</h2>
          <p>We play and practice volleyball mostly for fun.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>If they want to play volleyball.</p>
          <br/>

          <h2>What kind of people is the Volleyball Club looking to recruit?</h2>
          <p>People who enjoy volleyball.</p>
          <br/>

          <h2>What are some of the projects the Volleyball Club has done in the past?</h2>
          <p>We play volleyball on the oval a lot.</p>
          <br/>

          <h2>Does the Volleyball Club have plans for the future?</h2>
          <p>Hopefully arrange some games and have more volleyball players.</p>
          <br/>

          <h2>Where are meetings held?</h2>
          <p>Outside the gym</p>
          <br/>

          <h2>Contact:</h2>
          <p>Austin Li, LI-0255@gwsc.vic.edu.au</p>
          <br/>

          <div className="gallery">
            <img
              src={logo}
              alt="Volleyball club logo"
              width='300'
              height='300'
            />
            <img
              src={isaac}
              alt="Isaac"
              width='300'
              height='300'
            />
            <img
              src={austin}
              alt="Austin"
              width='300'
              height='300'
            />
            <img
              src={joey}
              alt="Joey"
              width='300'
              height='300'
            />
            <img
              src={kyara}
              alt="Kyara"
              width='300'
              height='300'
            />
          </div>

        </main>
        </div>
      <Footer />
    </div>
  );
}
