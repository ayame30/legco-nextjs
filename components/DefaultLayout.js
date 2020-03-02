import React, { useState } from 'react';
import Sidemenu from 'components/Sidemenu';
import classnames from 'classnames';
import styles from './DefaultLayout.module.scss';

// routes config

function DefaultLayout({ children, name }) { // TODO
  const [ open, setOpen ] = useState(false);
  const onClose = () => setOpen(false);
  
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <div className="fullheight flex-row-parent flex-center">
          <button onClick={() => setOpen(prev => !prev)} className="flex-70">
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
