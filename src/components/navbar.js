import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </Router>
    )
  }
}
