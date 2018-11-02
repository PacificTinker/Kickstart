const routes = require('next-routes')(); // extra () causes immediate invocation

routes
  .add('/campaigns/new','/campaigns/new')
  .add('/campaigns/:address','/campaigns/show')
  .add('/campaigns/:address/requests','campaigns/requests/index')
  .add('/campaigns/:address/requests/new','campaigns/requests/new');

module.exports = routes;
