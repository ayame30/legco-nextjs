const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  serverRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
  publicRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
})