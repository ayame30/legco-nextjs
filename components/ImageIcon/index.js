import React from 'react';
import classnames from 'classnames'
import styles from './index.module.scss';

export default ({ image, active }) => {
  styles;
  return (
    <div
      className={classnames(styles.imageIcon, {[styles.active]: active})}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}