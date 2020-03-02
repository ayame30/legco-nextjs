import React from 'react';
import classnames from 'classnames'
import styles from './ImageIcon.module.scss';

export default ({ image, active }) => (
  <div
    className={classnames(styles.imageIcon, {[styles.active]: active})}
    style={{ backgroundImage: `url(${image})` }}
  />
);