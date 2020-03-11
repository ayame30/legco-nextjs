import React from 'react';
import classnames from 'classnames';
import styles from './ProgressBar.module.scss';

export default ({ data, total = 100}) => {
  styles;
  return (
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
}