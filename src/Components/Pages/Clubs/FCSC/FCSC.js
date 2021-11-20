import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/FCSC_logo.png";

// Why
import FCSC_1 from "../Assets/FCSC_1.JPG";
import FCSC_2 from "../Assets/FCSC_2.JPG";
import FCSC_3 from "../Assets/FCSC_3.JPG";
import FCSC_4 from "../Assets/FCSC_4.JPG";
import FCSC_5 from "../Assets/FCSC_5.JPG";
import FCSC_6 from "../Assets/FCSC_6.JPG";
import FCSC_7 from "../Assets/FCSC_7.JPG";
import FCSC_8 from "../Assets/FCSC_8.JPG";
import FCSC_9 from "../Assets/FCSC_9.JPG";
import FCSC_10 from "../Assets/FCSC_10.JPG";

export const Fcsc = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Fundraising and Community Services Committee</h1>
          <p>Club leader: Lavanya Sharma</p>
          <br/>

          <h2>What is the objective of the FCSC?</h2>
          <p>The FCSC aims to raise awareness around the school about the poverty and mistreatment around the world and we strive to help people in need in any way we can. We partner up with non-profit organizations and help raise money and necessities for various charities such as the Red Cross, Salvation Army, Canteen, etc. In school, we organize events such as the World’s Greatest Shave, Athletics Carnival Stalls, some casual dress days and goods collection days to help other organizations.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>Anyone who wishes to help others and reduce the effects of poverty should join our club as we strive to partner up with other organizations to aid people in need (sometimes animals too).</p>
          <br/>

          <h2>What kind of people is the FCSC looking to recruit?</h2>
          <p>We're looking for people who are passionate and willing when it comes to helping others. We need people who can give their time to the collective efforts of our committee and contribute to it with their ideas and hard-work. Therefore, it would be recommended that new recruits aren't in a lot of clubs as we need them to volunteer and help out at various times throughout the year at recess, lunchtime, afterschool and sometimes even on the weekends. </p>
          <br/>

          <h2>What are some of the projects the FCSC has done in the past?</h2>
          <p>In the past we have organized successful events such as the World's Greatest Shave, Anzac Appeal, Senior School Athletics Carnival, Women's Day, Cultural Diversity Week stalls, AFL Raffles and Casual Dress days.</p>
          <br/>

          <h2>What are some projects that the FCSC are working on?</h2>
          <p>Currently, we are working on organizing a casual dress day to support State School Relief Fund. We're also hoping to hold an Asylum Seeker's goods collection in collaboration with the Salvation Army to help raise goods and money to assist Asylum seekers in Australia.</p>
          <br/>

          <h2>Does the FCSC have plans for the future?</h2>
          <p>In October we'll be organizing the National Bandana Day event and selling bandanas to raise money for the charity Canteen and if COVID permits we will be going on a visit to the RSPCA to meet up with the animals they have and hopefully hold an event to raise money and/or goods for the organization.</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Notified via email</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>MD1 (varies)</p>
          <br/>

          <h2>Contact:</h2>
          <p>Elizabeth Jenes - LJE@gwsc.vic.edu.au</p>
          <p>Miss Darougheh - EDA@gwsc.vic.edu.au</p>
          <br/>

          <div className='gallery'>
            <img
              src={logo}
              alt="Fundraising and Community Service Committee logo"
              width='300'
              height='300'
            />
            <img
              src={FCSC_1}
              alt="Fundraising and Community Service Committee Activity 1"
              width='300'
              height='300'
            />
            <img
              src={FCSC_2}
              alt="Fundraising and Community Service Committee Activity 2"
              width='300'
              height='300'
            />
            <img
              src={FCSC_3}
              alt="Fundraising and Community Service Committee Activity 3"
              width='300'
              height='300'
            />
            <img
              src={FCSC_4}
              alt="Fundraising and Community Service Committee Activity 4"
              width='300'
              height='300'
            />
            <img
              src={FCSC_5}
              alt="Fundraising and Community Service Committee Activity 5"
              width='300'
              height='300'
            />
            <img
              src={FCSC_6}
              alt="Fundraising and Community Service Committee Activity 6"
              width='300'
              height='300'
            />
            <img
              src={FCSC_7}
              alt="Fundraising and Community Service Committee Activity 7"
              width='300'
              height='300'
            />
            <img
              src={FCSC_8}
              alt="Fundraising and Community Service Committee Activity 8"
              width='300'
              height='300'
            />
            <img
              src={FCSC_9}
              alt="Fundraising and Community Service Committee Activity 9"
              width='300'
              height='300'
            />
            <img
              src={FCSC_10}
              alt="Fundraising and Community Service Committee Activity 10"
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
