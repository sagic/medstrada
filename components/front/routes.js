'use strict';

import React from 'react'
import {RouteHandler, Route} from 'react-router'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/" handler={require('./pages/home')} />
    <Route name="exhibition" path="/exhibition" handler={require('./pages/exhibition')} />
    <Route name="about" path="/about" handler={require('./pages/about')} />
    <Route name="news" path="/news" handler={require('./pages/news')} />
    <Route name="legal" path="/legal" handler={require('./pages/legal')} />
    <Route name="links" path="/links" handler={require('./pages/links')} />
    <Route name="feedback" path="/feedback" handler={require('./pages/feedback')} />
    <Route name="register" path="/register" handler={require('./pages/register')} />
  </Route>
);
