import NextApp from "next/app";
import React from "react";
import Layout from "components/DefaultLayout";
import { ApolloProvider } from '@apollo/react-hooks';
import NProgress from "nprogress";
import styles from "scss/style.scss";

import withApolloClient from "../lib/withApolloClient";
import { Router } from "../routes";

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
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    styles;
    const { Component, pageProps, apollo, ...rest } = this.props;
    const { route } = this.props.router;

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...rest} {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(App);