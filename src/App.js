import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Styles
import './App.css'
// Components
import {Home} from'./Components/Pages/Home.js';
import {Error} from './Components/Error.js'; // 404 error
import {Join} from './Components/Pages/Join.js';
import {ContactUs} from './Components/Pages/ContactUs.js';

// CLubs
import {ChatForChange} from './Components/Pages/Clubs/ChatForChange/ChatForChange.js';
import {ViReal} from './Components/Pages/Clubs/ViReal/ViReal.js';
import {VolleyballClub} from './Components/Pages/Clubs/VolleyballClub/VolleyballClub.js';
import {DaReadingClub} from './Components/Pages/Clubs/DaReadingClub/DaReadingClub.js';
import {CommunityArtsCouncil} from './Components/Pages/Clubs/CommunityArtsCouncil/CommunityArtsCouncil.js';
import {ModelUnitedNations} from './Components/Pages/Clubs/ModelUnitedNations/ModelUnitedNations.js';
import {TeaseSiblings} from './Components/Pages/Clubs/TeaseSiblings/TeaseSiblings.js';
import {TechCrew} from './Components/Pages/Clubs/TechCrew/TechCrew.js';


// The main App component, which is the entire website
export const App = () => {
  // Most of this is just linking to other pages.
  return (
    <Switch>
      <Route path='/' component={Home} exact /> {/* Link to Home page */}
      <Route path='/join' component={Join} />
      <Route path='/contact' component={ContactUs} />
      {/* Clubs */ }
      <Route path='/clubs/ChatForChange' component={ChatForChange} />
      <Route path='/clubs/ViReal' component={ViReal} />
      <Route path='/clubs/VolleyballClub' component={VolleyballClub} />
      <Route path='/clubs/DaReadingClub' component={DaReadingClub} />
      <Route path='/clubs/CommunityArtsCouncil' component={CommunityArtsCouncil} />
      <Route path='/clubs/ModelUnitedNations' component={ModelUnitedNations} />
      <Route path='/clubs/TeaseSiblings' component={TeaseSiblings} />
      <Route path='/clubs/TechCrew' component={TechCrew} />
      <Route component={Error} /> {/* In case of 404 error */}
    </Switch>
  );
}
