import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export const Tag = ({ children }) => (
  <span className={classnames(styles.tag)}>{children}</span>
);

export default ({ list = [] }) => (
  <div className={styles.tagList}>{list.map(label => <Tag key={label}>{label}</Tag>)}</div>
);