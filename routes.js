const routes = require('next-routes')();
const getConfig = require('next/config').default;

if (process.browser) {
  const { publicRuntimeConfig } = getConfig();

  const wrap = (method) => (route, params, options = {}) => {
    const { byName, urls: { as, href } } = routes.findAndGetUrls(route, params);

    // Force full page loads
    if (!publicRuntimeConfig.enableSPARouting && !options.replace) {
      window.location = as;
      return as;
    }

    // History pushstate
    return routes.Router[method](href, as, byName ? options : params);
  };

  // Override router push methods
  routes.Router.pushRoute = wrap('push');
  routes.Router.replaceRoute = wrap('replace');
  routes.Router.prefetchRoute = wrap('prefetch');
}

routes
  .add('index', '/', 'index')
  .add('bill', '/bills/:id', 'bill')
  .add('bills', '/bills', 'bills')
  .add('member', '/members/:id', 'member')
  .add('members', '/members', 'members');
  

module.exports = routes;

