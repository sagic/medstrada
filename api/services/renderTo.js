var React = require('react');
var Router = require('react-router');

module.exports = function (routes, wantsJSON, res, url, locals, state) {
  if (!wantsJSON) {
    Router.run(routes, url, (Root) => {
      if (state) {
        locals.state = 'window.__ReactInitState__=' + JSON.stringify(state) + ';';
      }
      res.view("layout", {
        locals: locals || {title: '', description: ''},
        body: React.renderToString(<Root {...state} />)
      });
    });
  } else if (state) {
    res.json(state);
  } else
    console.log("no state...")
};

