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
          <div className="area">
            <div className="header">Search</div>
            <div className="content">
              <div className="search-field inner-addon right-addon">
                <i className="glyphicon glyphicon-search"></i>
                <input type="text" className="form-control" placeholder="search" />
              </div>
            </div>
          </div>
          <div className="area">
            <div className="header">Categories</div>
            <div className="content">
              medical categories list
            </div>
          </div>
          <div className="area">
            <div className="header">Fields</div>
            <div className="content">
              medical fields list
            </div>
          </div>
        </div>
      </div>
    );
  }
});
