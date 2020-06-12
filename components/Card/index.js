import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export default ({ children, statusComponent = null, ...props }) => {
  styles;
  return (
    <button className={classnames(styles.card, { [styles.withStatus]: !!statusComponent })} {...props}>
      {children}
      {statusComponent ? (
        <div className={classnames('flex-row fullheight flex-center flex-middle', styles.status)}>
          {statusComponent}
        </div>
      ): null}
    </button>
  );
}