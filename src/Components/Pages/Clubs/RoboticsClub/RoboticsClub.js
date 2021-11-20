import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/RoboticsClub_logo.png";

export const RoboticsClub = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Robotics Club</h1>
          <p>Club leader: Mr. Gray</p>
          <br/>

          <h2>What is the objective of the Robotics Club?</h2>
          <p>We compete in an international competition called <a style={{color: 'blue'}}target="_blank"href="https://www.robocupjunior.org.au/about-us/about-us/">RoboCup</a>, where we compete against students in a progressive way, beginning with Regional, then State, then Nationals, then hopefully, International. Our platform of choice is the Lego Mindstorms Kit, however if you are proficient at other platforms, such as Arduino or Raspberry Pi, you may choose to do this. At each competition, the cohort gets more difficult, as you are required to place in the top 10 (unless there is low participation in the selected division) to qualify for the next competition. The primary division we offer is Rescue Line, where you must create a robot from scratch to navigate a course directed by a black line, ending with a rescue situation where you have to rescue the “victim” from a chemical spill. There are two sub-divisions you can take. The first is Secondary Rescue, which requires you to lock the “victim” in the robot’s grasp and push it out of the chemical spill, and Advanced Rescue, which is more suited for advanced/returning students involved in this competition. Advanced Rescue requires you to lift the “victim” up onto a singular platform. Aside from Rescue Line, there are other divisions. For extremely advanced students, we may offer you the opportunity to compete the Soccer division, which involves in getting two robots to simultaneously play soccer against two other robots. Another competition can also be introduced, if there are enough advanced and interested students in the yearly cohort. This competition is the First Lego League, which pushes the students minds to new limits, STEAM concepts being used all in one package. New mathematical and engineering concepts will be introduced via our club, and if you want a persuading item on your resume, be sure to join.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>If you are interested on engineering and mathematics, or simply enjoy the thrill of competition, you should join.</p>
          <br/>

          <h2>What kind of people is Club looking to recruit?</h2>
          <p>Creative students looking for extension to boost their intellectual capacity.</p>
          <p>Anyone may join, however if you are particularly strong at any of the following subjects, we advise you to join: Mechanical Engineering, Mathematics and Digital Technology (we mean programming).</p>
          <br/>

          <h2>What are some of the projects Club has done in the past?</h2>
          <p>We have worked on RoboCup competitions as our main task, although we occasionally compete in FLL if we have enough students capable of it.</p>
          <br/>

          <h2>What are some projects that Club are working on?</h2>
          <p>Robocup</p>
          <br/>

          <h2>Does Club have plans for the future?</h2>
          <p>Keep working on Robocup</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Monday Lunchtimes & Monday after school (2:45-4:30)</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>MU23</p>
          <br/>

          <h2>Contact:</h2>
          <p>Peter Gray - PGR@gwsc.vic.edu.au</p>
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
