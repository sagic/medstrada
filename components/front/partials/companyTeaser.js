'use strict';

var React = require('react');

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  },

  render: function () {
    return (
      <li className="company-teaser">
        <div className="wrapper"
             style={{backgroundImage: 'url(https://logo.clearbit.com/gilead.com?greyscale=true&size=100)'}}>
        </div>
      </li>
    );
  }
});
