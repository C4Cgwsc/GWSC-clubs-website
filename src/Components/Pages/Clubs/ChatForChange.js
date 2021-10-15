import React from 'react';
// Components
import {Header} from '../../Header.js';
import {Footer} from '../../Footer.js';
import {NavBar} from '../../NavBar.js';
import {SideBar} from '../../SideBar.js';
// Styles
import './ChatForChange.css';

export const ChatForChange = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Chat for Change</h1>
          <p>Chat for change is a student-led club at Glen Waverley Secondary College <strong>dedicated</strong> to making a <strong>change</strong> in the wider community! We run every Tuesday lunchtime at MD17! Our projects recently have included the recycling program, the India COVID funding and the clubs support forum.</p>
          <p>This year our main priorities have been focusing on the <strong>Mental health program</strong>, the <strong>living and learning rescheduling course outline project</strong> and <strong>Sexism Awareness</strong> topic. We believe they are most significant and must be deeply explored in order to garner the benefits of aiding as many individuals as we can.</p>
          <p>Join us in this joint attempt for collective progression!</p>
          <br/>
          <h4>Mental Health Program:</h4>
          <p>This is a project where we would like to start by conducting a survey throughout the school- across all year levels, to develop an understanding of the current mental health situation of our students.</p>
          <p>Due to this year’s arduity and general difficulty, mental health has inevitably abated. This valuable information of the survey gives us an outline and consequently gives us an idea of how we can help individuals who are feeling low. Through this data, we at C4C can implement more projects that support the mental health of students.</p>
          <br/>
          <h4>Sexism Awareness Project:</h4>
          <p>This is a project where we increase awareness about sexism and its negative effects towards both men and women in our society. Social media, posters/infographics and other forms of media will be utilized to increase awareness about such issues.</p>
          <p>Sexism is the prejudice or discrimination one experiences due to one’s sex or gender, primarily affecting women and young girls. The severity of the issue is exacerbated through the degrading and insulting language that individuals are subject to quite often. To ensure that the effects are minimized, we need to increase awareness and clearly voice our aversion and disgust towards such behaviour. This is a project inspired by the stand Maria Thattil took after she was added to a group chat with teens where she endured sexism through very demeaning language directed towards women.</p>
          <br/>
          <h4>Living and learning program</h4>
          <p>We have found that the living and learning program at our school lacks productivity and consequently, application, as it fails to address students' current situations. By discussing plans in club meetings we can create alternative lesson plans to ensure that students absorb information, while still discussing the topics required by the Victorian curriculum. By re-evaluating and changing the living and learning lesson plans, we can increase student participation and overall knowledge.</p>
          <p>Contact us at c4cgwsc@gmail.com</p>
        </main>
        </div>
      <Footer />
    </div>
  );
}
