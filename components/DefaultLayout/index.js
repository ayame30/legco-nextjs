import React, { useState } from 'react';
import Head from 'next/head'

import Sidemenu from 'components/Sidemenu';
import classnames from 'classnames';
import styles from './index.module.scss';
// routes config

function DefaultLayout({ children, name }) { // TODO
  const [ open, setOpen ] = useState(false);
  const onClose = () => setOpen(false);
  styles;
  return (
    <div className={styles.app}>
      <Head>
        <title>立會監察站</title>
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="立會監察站" />
        <meta name="apple-mobile-web-app-title" content="立會監察站" />
        <meta name="theme-color" content="#3E3E3E" />
        <meta name="msapplication-navbutton-color" content="#3E3E3E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      </Head>
      <div className={styles.topbar}>
        <div className="fullheight flex-row-parent flex-center">
          <button aria-label="開關側欄" onClick={() => setOpen(prev => !prev)} className="flex-70">
            {open ? <i className="fas fa-times h2 px-3" /> : <i className="fas fa-bars h2 px-3" />}
          </button>
          <span className="h2 px-1">{name}</span>
        </div>
      </div>
      <main className="main">
        <Sidemenu open={open} onClose={onClose}/>
        <div className={classnames(styles.children, {[styles.whenSidemenuOpen]: open})}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default DefaultLayout;
