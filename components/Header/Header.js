import React, { Component } from 'react';
import './Header.scss';
import Link from '../Link';

const logoUrl = require('../../asserts/skygear-logo-sm.png');

export default class extends Component {
  render() {
    return (
      <div className="Header">
        <Link className="Logo" to="/">
          <img src={logoUrl} />
        </Link>

        <ul className="Menu" role="menu">
          <li className="Menu-item">
            <a className="Menu-link" href="https://skygear.io">
              Features
            </a>
          </li>
          <li className="Menu-item">
            <Link className="Menu-link" to="/">
              <span>Docs</span>
            </Link>
          </li>
          <li className="Menu-item">
            <a className="Menu-link" href="https://github.com/skygearIO/">
              Github
            </a>
          </li>
          <li className="Menu-item primary">
            <Link className="Menu-link" to="/get-started">
              <span>Get Started</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
