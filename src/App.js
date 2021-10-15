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
import {ChatForChange} from './Components/Pages/Clubs/ChatForChange.js';

// The main App component, which is the entire website
export const App = () => {
  // Most of this is just linking to other pages.
  return (
    <Switch>
      <Route path='/' component={Home} exact /> {/* Link to Home page */}
      <Route path='/join' component={Join} />
      <Route path='/contact' component={ContactUs} />
      <Route component={Error} /> {/* In case of 404 error */}
      <Route path='/clubs/ChatForChange' component={ChatForChange} />
    </Switch>
  );
}
