import React from 'react';
// Components
import {Header} from '../../../Header.js';
import {Footer} from '../../../Footer.js';
import {NavBar} from '../../../NavBar.js';
import {SideBar} from '../../../SideBar.js';
// Logo
import logo from "../Assets/LibraryAmbassadors_logo.tif";

export const LibraryAmbassadors = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Library Ambassadors</h1>
          <p>Club leaders: Kaeyura M, Ranudhi B, Riya B</p>
          <br/>

          <h2>What is the objective of the Library Ambassadors?</h2>
          <p>Our main objective in Library Ambassador is to find ways to make reading fun inorder to encourage people to enjoy reading more books of their choice. We also try to help others find the right book so they can escape into a perfect adventure without getting out of bed.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>Library Ambassadors provides individuals a safe environment to discuss about their favourite reads while also coming up with innovative ideas that helps people understand the fun and importance in reading. Not only that but Library Ambassadors opens up opportunities for people to unlock and enhance leadership qualities as they learn to organize events, projects etc.</p>
          <br/>

          <h2>What kind of people are the Library Ambassadors looking to recruit?</h2>
          <p>We welcome anyone who loves to explore new worlds weather it's fantasy, mystery, horror, romance, or anything they love. </p>
          <br/>

          <h2>What are some of the projects the Library Ambassadors has done in the past?</h2>
          <p>In Library Ambassadors we have worked on many projects some include the book review wall that's was created by the library members after several weeks of work. The book review wall states some of the members personal favourite books with little summaries of each novel. </p>
          <br/>

          <h2>Do the Library Ambassadors have plans for the future?</h2>
          <p>It's always been a Library Ambassador tradition to attend the Writers festival which offers students to meet authors to get a professional insight on books. This is still a tradition and we plan on continuing it for years to come. </p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Every second Monday at lunchtime (12:20)</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>The library</p>
          <br/>

          <h2>Contact:</h2>
          <p>Jill Brady - JBY@gwsc.vic.edu.au</p>
          <br/>

          <img
            src={logo}
            alt="Library Ambassadors logo"
            width='300'
            height='300'
          />

        </main>
        </div>
      <Footer />
    </div>
  );
}
