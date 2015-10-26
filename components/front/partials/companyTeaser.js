'use strict';

var React = require('react');
var _ = require('lodash-node');

var addresses = ['pluristem.com', 'gilead.com', 'vayusense.com', 'yissum.co.il', 'abbvie.com'];

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  },

  render: function () {

    var addr = _.sample(addresses);
    var bgUrl = 'https://logo.clearbit.com/' + addr + '?greyscale=true&size=100';
    return (
      <li className="company-teaser">
        <div className="wrapper" style={{backgroundImage: 'url('+bgUrl+')'}}>
        </div>
      </li>
    );
  }
});
