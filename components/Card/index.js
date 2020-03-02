import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export const SecondReadStatus = () => (
  <div className="flex-self-center">
    <div className="h1">
      <i className="fas fa-check-circle icon-lg" />
    </div>
    <div className="h3">二讀</div>
  </div>
);

export const CardImage = ({ image }) => (
  <div
    className={classnames(styles.cardImage)}
    style={{ backgroundImage: `url(${image})` }}
  />
);

export default ({ children, statusComponent = null, ...props }) => (
  <button className={classnames(styles.card, { [styles.withStatus]: !!statusComponent })} {...props}>
    {children}
    {statusComponent ? (
      <div className={classnames('flex-row-parent fullheight flex-center flex-middle', styles.status)}>
        {statusComponent}
      </div>
    ): null}
  </button>
);