import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export default ({ answers }) => {
    return (
        <div className="flex-row">
            {answers.map(s => <div className={classnames(styles.status, { 'bg-green': s === 'yes', 'bg-red': s === 'no'})} />)}
        </div>
    );
}