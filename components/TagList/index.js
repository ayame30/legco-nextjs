import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';


export default ({ list = [] }) => {
  styles;

  return (
    <div className={styles.tagList}>
      {list.map(label => 
        <span key={label} className={classnames(styles.tag)}>{label}</span>
      )}
    </div>
  );
}