import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/.jpg";

export const club = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Club</h1>
          <p>Club leader: </p>
          <br/>

          <h2>What is the objective of Club?</h2>
          <p></p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p></p>
          <br/>

          <h2>What kind of people is Club looking to recruit?</h2>
          <p></p>
          <br/>

          <h2>What are some of the projects Club has done in the past?</h2>
          <p></p>
          <br/>

          <h2>What are some projects that Club are working on?</h2>
          <p></p>
          <br/>

          <h2>Does Club have plans for the future?</h2>
          <p></p>
          <br/>

          <h2>When are the meetings?</h2>
          <p></p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p></p>
          <br/>

          <h2>Contact:</h2>
          <p></p>
          <br/>

          <img
            src={logo}
            alt=""
            width='300'
            height='300'
          />

        </main>
        </div>
      <Footer />
    </div>
  );
}
