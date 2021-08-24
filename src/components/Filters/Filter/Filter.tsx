import React from 'react';
import classNames from 'classnames/bind';

import styles from './Filter.module.css';

const cn = classNames.bind(styles);

const Filter = (props: any) => {
    const setCheaperFilter = () => props.dispatch({ type: 'cheaper' });
    const setFasterFilter = () => props.dispatch({ type: 'faster' });

    return (
      <div className={styles.wrap}>
          <button
              className={cn('btn', styles['btn-left'], {'btn-active': props.filter === 'cheaper'})}
              onClick={setCheaperFilter}
          >
              Самый дешевый
          </button>
          <button
              className={cn('btn', styles['btn-right'], {'btn-active': props.filter === 'faster'})}
              onClick={setFasterFilter}
          >
              Самый быстрый
          </button>
      </div>
    );
};


export default Filter;