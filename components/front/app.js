
var $ = require('jquery');
import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import Exhibition from './partials/exhibition'
import CompaniesFilter from './partials/companiesFilter'

Router.run(require('./routes'), HistoryLocation, (Root) => {
  React.render(<Root {...window.__ReactInitState__}/>, $('.page-content')[0]);
  delete window.__ReactInitState__;
});

React.render(<Exhibition />, $('.exhibition')[0]);
