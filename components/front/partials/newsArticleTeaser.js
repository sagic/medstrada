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
      <li>
        <div className="wrapper">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisi vestibulum, vehicula ex quis, molestie
            nulla. Duis ullamcorper nibh quis tellus fringilla, at vehicula massa egestas. Vestibulum sit amet lacus
            arcu.</p>

          <p>Nam ut leo lobortis, ullamcorper justo sit amet, maximus est.</p>
        </div>
      </li>
    );
  }
});
