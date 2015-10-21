'use strict';

var React = require('react');

var CompaniesListItem = React.createClass({
  render: function () {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>lorem ipsum</div>
      </div>
    );
  }
});

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  },

  render: function () {
    var rows = [], i = 0, len = 10;
    while (++i <= len) {
      rows.push({
        name: 'company name',
        logo: '',
        description: '',
        website: ''
      });
    }

    return (
      <div className="recent-companies">
        <div>
          <ul>
            {rows.map(function (comp, i) {
              return <CompaniesListItem key={i} company={comp}/>;
            })}
          </ul>
        </div>
      </div>
    );
  }
});
