import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const ReadingStatus = ({ label, active, lastActive }) => (
  <div
    className={classnames(
      'flex text-center',
      styles.readStatus,
      {
        [styles.active]: active,
        [styles.lastActive]: lastActive,
      },
    )}
  >
    <div className={classnames('h1', styles.icon)}>
      <i className="fas fa-check-circle icon-lg" />
    </div>
    <div className="h3 p1">{label}</div>
  </div>
);

export default ReadingStatus;