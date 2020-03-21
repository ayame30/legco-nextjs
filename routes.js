const routes = require('next-routes')();
const getConfig = require('next/config').default;

routes
  .add('index', '/', 'index')
  .add('bill', '/bills/:id', 'bill')
  .add('bills', '/bills', 'bills')
  .add('member', '/member/:id/:page?', 'member')
  .add('members', '/members', 'members');
  

module.exports = routes;

