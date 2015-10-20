'use strict';

var React = require('react');
var NewsArticlesTicker = require('./newsArticleTeaser');

module.exports = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  },

  render: function () {
    var rows = [], i = 0, len = 1;
    while (++i <= len) rows.push(i);

    return (
      <div className="news-ticker">
        <div className="title">News</div>
        <div>
          <ul>
            {rows.map(function (i) {
              return <NewsArticlesTicker key={i} company={i}/>;
            })}
          </ul>
        </div>
      </div>
    );
  }
});
