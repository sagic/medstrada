"use strict";

import React from 'react'
import {Link} from 'react-router'

export default class {
  handleClick(e) {
    alert('sababa');
  }
  render() {
    return (
      <div className="site-logo" onClick={this.handleClick.bind(this)}>
        Medstrada
      </div>
    )
  }
}

