'use strict';

var React = require('react');
var CompanyTeaser = require('./companyTeaser');

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  },

  render: function () {
    var rows = [], i = 0, len = 10;
    while (++i <= len) rows.push(i);

    return (
      <div className="recent-companies">
        <div className="title">Recent companies</div>
        <div>
          <ul>
            {rows.map(function (i) {
              return <CompanyTeaser key={i} company={i}/>;
            })}
          </ul>
        </div>
      </div>
    );
  }
});
