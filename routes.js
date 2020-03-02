const routes = require('next-routes')();
const getConfig = require('next/config').default;

routes
  .add('index', '/', 'index')
  .add('bill', '/bills/:id', 'bill')
  .add('bills', '/bills', 'bills')
  .add('member', '/members/:id', 'member')
  .add('members', '/members', 'members');
  

module.exports = routes;

