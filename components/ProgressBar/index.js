import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';


export default ({ data, total = 100}) => (
  <div className={classnames(styles.progressBar)}>
    {data.map(({ value, color, className }) => {
      if (!value) return null;
      const percentage = value / total * 100;
      return (
        <div
          key={value}
          className={classnames(styles.bar, className)}
          style={{ width: `${percentage}%`}}
        />
      );
    })}
  </div>
);