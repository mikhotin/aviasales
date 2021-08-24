import React from 'react';
import classNames from 'classnames/bind';

import styles from './FilterWithTransfer.module.css';

const cn = classNames.bind(styles);

const FilterWithTransfer = (props: any) => {
    const checkAllHandler = () => props.dispatch({ type: 'all' });
    const checkWithoutTransferHandler = () => props.dispatch({ type: 'withoutTransfer' });

    return (
        <div className={styles.filters}>
            <h2 className={styles.title}>Количество пересадок</h2>
            <ul>
                <li className={styles.item}>
                    <input className={cn('visually-hidden', styles.checkbox)} type="checkbox" id="all"/>
                    <label onClick={checkAllHandler} htmlFor="all">Все</label>
                </li>
                <li className={styles.item}>
                    <input className={cn('visually-hidden', styles.checkbox)} type="checkbox" id="withoutTransfers"/>
                    <label onClick={checkWithoutTransferHandler} htmlFor="withoutTransfers">Без пересадок</label>
                </li>
                <li className={styles.item}>
                    <input className={cn('visually-hidden', styles.checkbox)} type="checkbox" id="withOneTransfer"/>
                    <label htmlFor="withOneTransfer">1 пересадка</label>
                </li>
                <li className={styles.item}>
                    <input className={cn('visually-hidden', styles.checkbox)} type="checkbox" id="withTwoTransfers"/>
                    <label htmlFor="withTwoTransfers">2 пересадки</label>
                </li>
                <li className={styles.item}>
                    <input className={cn('visually-hidden', styles.checkbox)} type="checkbox" id="withThreeTransfers"/>
                    <label htmlFor="withThreeTransfers">3 пересадки</label>
                </li>
            </ul>
        </div>
    );
};

export default FilterWithTransfer;