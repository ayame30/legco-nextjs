/**
 * All config needed for the app should be parsed from environment variables in this file.
 * This goes for config needed in server code as well as config needed in browser code.
 * - If the config is needed in a Node js file, you should import it directly from here.
 * - If the config is needed in browser code, which may sometimes be executed in a browser
 *   and sometimes be executed on the server, you should import the config from here into
 *   next.config.js and add it to either `publicRuntimeConfig` or `serverRuntimeConfig`.
 *   Then use `getConfig()` to get it within React components and other browser code.
 */
const envalid = require("envalid");
require('dotenv').config();

// Config is loaded for the `next build` command, too, and we don't want to complain
// about missing environment variables in that phase.
if (process.env.IS_BUILDING_NEXTJS) {
  module.exports = {};
} else {
  const { bool, num, port, str, url } = envalid;

  /**
   * See https://www.npmjs.com/package/envalid
   *
   * Envalid parses NODE_ENV automatically, and provides the following
   * shortcut (boolean) properties for checking its value:
   *   env.isProduction    // true if NODE_ENV === 'production'
   *   env.isTest          // true if NODE_ENV === 'test'
   *   env.isDevelopment   // true if NODE_ENV === 'development'
   *
   * Be sure to add `{ default: null }` if it should be optional.
   */
  module.exports = envalid.cleanEnv(process.env, {
    ENABLE_SPA_ROUTING: bool({ default: true }), // must explicitly set to false to disable
    GRAPHQL_URL: url(),
    NODE_ENV: str({ choices: ["development", "test", "jesttest", "production"], default: "production" }),
    PORT: port({ default: 4000 }),
    SESSION_MAX_AGE_MS: num({ default: 86400000 }), // 24 hours
    SESSION_SECRET: str(),
    STRIPE_PUBLIC_API_KEY: str({ default: "" }),
    SITEMAP_MAX_AGE: num({ default: 43200 }), // 12 hours,
    GA_TRACKING_ID: str(),
  }, {
    // disable dotenv processing
    dotEnvPath: null,
    // https://www.npmjs.com/package/envalid#strict-mode
    strict: true
  });
}
