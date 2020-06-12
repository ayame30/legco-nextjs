import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export default () => {
    const status = ['yes', 'no', 'yes', '', '', ''];
    return (
        <div className="flex-row">
            {status.map(s => <div className={classnames(styles.status, { 'bg-green': s === 'yes', 'bg-red': s === 'no'})} />)}
        </div>
    );
}