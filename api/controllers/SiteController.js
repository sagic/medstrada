/**
 * SiteController
 *
 * @description :: Server-side logic for managing site
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import routes from '../../components/front/routes'

module.exports = {
  page: function (req, res) {
    renderTo(routes, false, res, '/', {title: 'Medstrada'}, {});
  }
};

