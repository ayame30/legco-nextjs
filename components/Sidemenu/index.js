import React, { useState } from 'react';
import classnames from 'classnames';
import { Router } from 'routes';
import styles from './index.module.scss';

const Sidemenu = ({ open, onClose }) => {
  styles;
  const [ search, setSearch ] = useState('');
  const navItems = [
    { label: '首頁', icon: 'fas fa-home', href: '/' },
    { label: '法案', icon: 'fas fa-book', href: '/bills' },
    { label: '議員', icon: 'fas fa-user-tie', href: '/members' },
    { label: '政黨', icon: 'fas fa-users', href: '/party' },
    { label: '小遊戲', icon: 'fas fa-star', href: '/games' }
  ];
  
  const gotoFn = (url) => () => {
    Router.pushRoute(url);
    onClose();
  }
  
  return (
      <div className={classnames(styles.sidemenuContainer, {[styles.open]: open})}>
        <button className={styles.overlay} onClick={onClose} aria-label="關閉側欄"/>
        <div className={classnames(styles.sidemenu, {[styles.open]: open})}>
          <div className={classnames(styles.input, 'flex-row flex-center')}>
            <i className="fas fa-search p2 flex-50 text-center"></i>
            <input aria-label="搜尋議員／議案" placeholder="議員／議案" value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className={classnames(styles.menu, 'py-2')}>
            {navItems.map((item) => (
              <button key={item.href} className="fullwidth flex-row flex-center h3" onClick={gotoFn(item.href)}>
                <div className="p2 flex-50 text-center"><i className={item.icon} /></div>
                <div>{item.label}</div>
              </button>
            ))}
          </div>
          <img className={styles.logo} src="/logo.svg" alt="Logo" />
        </div>
      </div>
  );
}
export default Sidemenu;