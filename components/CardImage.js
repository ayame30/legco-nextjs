import React from 'react';
import classnames from 'classnames';
import styles from './CardImage.module.scss';


export default ({ image }) => (
  <div
    className={classnames(styles.cardImage)}
    style={{ backgroundImage: `url(${image})` }}
  />
);
