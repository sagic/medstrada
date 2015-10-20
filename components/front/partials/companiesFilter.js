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
      <div className="companies-filter">
        <div className="wrapper">
          <div className=".area">
            <div className=".header">Search</div>
            <div className=".content">
              <input type="text" name="title" placeholder="search"></input>
            </div>
          </div>
          <div className=".area">
            <div className=".header">Categories</div>
            <div className=".content">
              <input type="text" name="title" placeholder="search"></input>
            </div>
          </div>
          <div className=".area">
            <div className=".header">Fields</div>
            <div className=".content">
              <input type="text" name="title" placeholder="search"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
