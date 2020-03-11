import React from 'react';
import styles from './Section.module.scss';

export default ({ children, title, onMore }) => {
  styles;
  return (
    <div className={styles.section}>
      <div className="flex-row-parent flex-center flex-space-between">
        <span className="h2">{title}</span>
        {onMore ? <button className="float-right h5" onClick={onMore}>更多</button> : null}
      </div>
      {children}
    </div>
  );
}