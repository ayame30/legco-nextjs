const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const express = require("express");
const compression = require("compression");
const nextApp = require("next");
const config = require("./config");
const router = require("./routes");
const { sitemapRoutesHandler } = require("./sitemapRoutesHandler");


// First create the NextJS app.
// Note that only `config` can be used here because the NextJS `getConfig()` does not
// return anything until after the NextJS app is initialized.
const app = nextApp({
  dev: config.isDev,
  // dir: "./src"
});


app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.use(cookieParser());

    // add graphiql redirects to EXTERNAL_GRAPHQL_URL
    server.get(["/graphiql", "/graphql-beta", "/graphql-alpha", "/graphql"], (req, res) => {
      res.redirect(301, config.EXTERNAL_GRAPHQL_URL);
    });

    // apply to routes starting with "/sitemap" and ending with ".xml"
    server.use(/^\/sitemap.*\.xml$/, sitemapRoutesHandler);

    // Setup next routes
    const routeHandler = router.getRequestHandler(app);
    server.use(routeHandler);

    return server.listen(process.env.PORT || config.PORT, '0.0.0.0', (err) => {
      if (err) throw err;
      console.log(`App started at port ${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

module.exports = app;
