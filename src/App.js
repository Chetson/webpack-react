import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';

import Home from './components/home';
import About from './components/about';
import Contacts from './components/contacts';

ReactDOM.render(
  <div>
    <Navbar />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  </div>,
  document.getElementById('react-container')
);
