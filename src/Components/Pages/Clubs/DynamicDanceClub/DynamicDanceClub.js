import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/DynamicDanceClub_logo.png";

export const DynamicDanceClub = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>The Dynamic Dance Club</h1>
          <p>Club leader: Noel Mathew</p>
          <br/>

          <h2>What is the objective of the Dynamic Dance Club?</h2>
          <p>The Dynamics Dance Club is a place for students to showcase their talent or learn a new one, a place to find a passion, a place to connect with other students and most importantly a place for students to have fun.</p>
          <p>We will have new themes each week based on the school week events or song genres such as IDAHOBIT, Cultural Diversity, Pop, Rock, Indie etc.…</p>
          <p>We will perform in various events such as cultural diversity day, student-run dance competitions or flash mobs that will be performed each term.</p>
          <p>Performances will be assigned to students each week which they will have time to prepare and showcase on the days the club will be active.</p>
          <p>Group performances will be coordinated and performed at school events.</p>
          <p>We will have a YouTube channel where we will upload videos every month and give students a chance to showcase their talent inside and outside the school. We will also have social media handles to promote the club and also post short videos monthly.</p>
          <p>Students of all ages can participate and you don’t have to have prior experience in dancing to join.</p>

          <br/>

          <h2>Why should anybody join?</h2>
          <p>People can come to improve their social skills and also get rid of common fears such as stage fright or anxiety.</p>
          <p>Dancing is also scientifically proven to help both your Mental and Physical Health.</p>
          <p>Dancing strengthens physical and mental health by helping to prevent falls, improve posture and flexibility, lift mood and ease anxiety.</p>

          <br/>

          <h2>What kind of people is the Dynamic Dance Club looking to recruit?</h2>
          <p>We are looking to recruit Beginner to Intermediate to Expert Dancers in ( Hip Hop, Break Dance and Freestyle Dancing )</p>
          <br/>

          <h2>What are some projects that the Dynamic Dance Club are working on?</h2>
          <p>Clubs Day Dance Presentations</p>
          <br/>

          <h2>Does the Dynamic Dance Club have plans for the future?</h2>
          <p>A YouTube Channel ( A Concept of 'One Million Dance Studio' )</p>
          <p>Flash Mobs ( Sudden Performances out of the Blue )</p>
          <p>Live Performances Every Month ( Will be posted ahead of Performance )</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Wednesday or Friday lunchtime</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>MD1, Treseder Hall or the Gym.</p>
          <br/>

          <h2>Contact:</h2>
          <p>Noel Mathew - MAT0032@gwsc.vic.edu.au</p>
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
