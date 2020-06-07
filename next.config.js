const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const path = require('path');

module.exports = ({
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  serverRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
  publicRuntimeConfig: {
    graphqlUrl: process.env.GRAPHQL_URL,
  },
  
})