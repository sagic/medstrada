/**
 * SiteController
 *
 * @description :: Server-side logic for managing site
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from '../../components/front/routes'

module.exports = {
  page: function (req, res) {

    res.send(200, renderToString(<RoutingContext {...renderProps} />));
    return;

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
      if (error) {
        res.json({err: '1'});
        //res.send(500, error.message)
      } else if (redirectLocation) {
        res.json({err: '2'});
        //res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        //renderTo(routes, false, res, '/', {title: 'Medstrada'}, {});
      } else {
        res.json({err: '3'});
        //res.send(404, 'Not found')
      }
    });


  }
};

