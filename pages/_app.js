import NextApp from "next/app";
import React from "react";
import Layout from "components/DefaultLayout";
import { ApolloProvider } from '@apollo/react-hooks';
import NProgress from "nprogress";
import "scss/style.scss";
import withApolloClient from "../lib/withApolloClient";
import { Router } from "../routes";
import { ClientContextProvider } from 'react-fetching-library';
import client from 'lib/client';
import 'isomorphic-unfetch';

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
  window.scrollTo(0, 0);
});
Router.events.on("routeChangeError", (err) => {
  NProgress.done();
});

class App extends NextApp {
  static async getInitialProps (appContext) {
    let appProps = {}

    if (typeof NextApp.getInitialProps === 'function') {
        appProps = await NextApp.getInitialProps(appContext)
    }

    return {
        ...appProps,
        cacheItems: client.cache.getItems(),
    }
  }

  render() {
    const { Component, pageProps, apollo, apiContext, cacheItems, ...rest } = this.props;
    client.cache.setItems(cacheItems);
    return (
      <ApolloProvider client={apollo}>
        <ClientContextProvider client={client}>
          <Layout>
            <Component {...rest} {...pageProps} />
          </Layout>
        </ClientContextProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(App);