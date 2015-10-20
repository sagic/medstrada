"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/" handler={require('./pages/home')} />
    <Route name="info" path="/info" handler={require('./pages/info')} />
    <Route name="contact" path="/contact" handler={require('./pages/contact')} />
    <Route name="company" path="/company" handler={require('./pages/company')} />
  </Route>
);
