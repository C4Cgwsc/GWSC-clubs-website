import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/DaReadingClub_logo.png";

export const DaReadingClub = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Da Reading Club</h1>
          <p>Club leader: Amelie Truong</p>
          <br/>

          <h2>What is the objective of Da Reading Club?</h2>
          <p>our club strives to give students a friendly and accepting environment to share book recommendations and simply read</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>our club strives to give students a friendly and accepting environment to share book recommendations and simply read. </p>
          <br/>

          <h2>What kind of people is Da Reading Club looking to recruit?</h2>
          <p>you should join if you are struggling to make friends or finding a book to read for wider reading</p>
          <br/>

          <h2>What are some of the projects Da Reading Club has done in the past?</h2>
          <p>I was involved in The PAW committee. I am also form captain for my class (8E2).</p>
          <br/>

          <h2>What are some projects that Da Reading Club are working on?</h2>
          <p>We are currently work on reading journals to document everyone’s reads.</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Thursday lunchtime</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>The library</p>
          <br/>

          <h2>Contact:</h2>
          <p>Amelie Truong email: TRU0011@gwsc.vic.edu.au</p>
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
