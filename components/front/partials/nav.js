"use strict";

import React from 'react'
import {Link} from 'react-router'

export default class {
  render() {
    return (
      <nav className="nav-mainmenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

