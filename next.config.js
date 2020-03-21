const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

module.exports = withOffline(withSass({
  cssModules: true,
  serverRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
  publicRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /.jpg/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /.woff2/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /.js/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /graphql/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  }
}))