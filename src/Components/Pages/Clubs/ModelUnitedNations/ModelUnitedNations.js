import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/MUN_logo.png";

export const ModelUnitedNations = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Model United Nations</h1>
          <p>Club leaders: Arielle Lee, Kylin Zheng</p>
          <br/>

          <h2>What is the objective of the Model United Nations?</h2>
          <p>Model United Nations, also known as Model UN or MUN, is an extra-curricular activity in which students typically roleplay delegates to the United Nations and simulate UN committees. This activity takes place at MUN conferences, which is usually organized by a high school or college MUN club. At the end of most conferences, outstanding delegates in each committee are recognized and given an award certificate; the Best Delegate in each committee, however, receives a gavel.</p>
          <p>Thousands of middle school, high school, and college students across the country and around the world participate in Model United Nations, which involves substantial researching, public speaking, debating, and writing skills, as well as critical thinking, teamwork, and leadership abilities.</p>
          <p>Our club aims to allow students to experience what it's like being a delegate for the UN. It promotes the growth of students interpersonal skills as well as their public speaking abilities, diplomacy skills and problem solving skills under pressure.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>It’s a fun way of learning about the world. In this era of globalization, being globally aware is more important than ever. Also, having fun makes it easier to learn something and more likely to stick.</p>
          <p>It develops leadership skills. MUN is an exercise in research, public speaking, and teamwork. These are skills that you will need throughout your career, and MUN gives you a chance to practice them while you’re a student.</p>
          <p>You can leverage your MUN experience and network to get into uni and find jobs. Admissions officers and job interviewers look for examples of leadership, and your experiences as a delegate or conference organizer will be good examples. You will also develop a network of alumni from your MUN club and people you’ve met at conferences.</p>
          <br/>

          <h2>What kind of people is the Model United Nations looking to recruit?</h2>
          <p>Anyone with a passion for public speaking and international affairs!!</p>
          <br/>

          <h2>What are some of the projects the Model United Nations has done in the past?</h2>
          <p>Running security councils, general assemblies and running a mock WHO</p>
          <br/>

          <h2>Does the Model United Nations have plans for the future?</h2>
          <p>We would love to be able to hold MUN competitions within our school and engage students in the wonders of the youth MUN events, such as Evatt, IPS and state conference.</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Friday lunchtimes</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>MD12</p>
          <br/>

          <h2>Contact:</h2>
          <p>Arielle Lee - lee0192@gwsc.vic.edu.au</p>
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
