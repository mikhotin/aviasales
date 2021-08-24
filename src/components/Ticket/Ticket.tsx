import React from 'react';

import { formatSum } from '../../utils/formatSum';
import { formatMinutes, formatStartEndTime } from '../../utils/formatDate';

import styles from './Ticket.module.css';

const formatStops = (stops: string[]):string => {
    const countStops = stops.length;

    if (!countStops) {
        return 'Без пересадок';
    }

    return countStops === 1 ? '1 Пересадка' : `${countStops} Пересадки`;
};

const Ticket = (props: any) => {
    const item = props.item;
    const price = formatSum(item.price);
    const [fistSegment, secondSegment] = item.segments;

    return (
        <li className={styles.card}>
            <div className={styles.wrap}>
                <span className={styles.sum}>{price}</span>
                <img src={`http://pics.avs.io/99/36/${item.carrier}.png`} alt=""/>
            </div>
            <div className={styles.grid}>
                <div>
                    <h3 className={styles.subtitle}>
                        {`${fistSegment.origin} - ${fistSegment.destination}`}
                    </h3>
                    <span className={styles.text}>
                        {formatStartEndTime(fistSegment.date, fistSegment.duration)}
                    </span>
                </div>
                <div>
                    <h3 className={styles.subtitle}>В пути</h3>
                    <span className={styles.text}>
                        {formatMinutes(fistSegment.duration)}
                    </span>
                </div>
                <div>
                    <h3 className={styles.subtitle}>
                        {formatStops(fistSegment.stops)}
                    </h3>
                    <span className={styles.text}>
                        {fistSegment.stops.length > 0 ? fistSegment.stops.join(', ') : '-'}
                    </span>
                </div>
                <div>
                    <h3 className={styles.subtitle}>
                        {`${secondSegment.origin} - ${secondSegment.destination}`}
                    </h3>
                    <span className={styles.text}>
                        {formatStartEndTime(secondSegment.date, secondSegment.duration)}
                    </span>
                </div>
                <div>
                    <h3 className={styles.subtitle}>В пути</h3>
                    <span className={styles.text}>
                        {formatMinutes(secondSegment.duration)}
                    </span>
                </div>
                <div>
                    <h3 className={styles.subtitle}>
                        {formatStops(secondSegment.stops)}
                    </h3>
                    <span className={styles.text}>
                        {secondSegment.stops.length > 0 ? secondSegment.stops.join(', ') : '-'}
                    </span>
                </div>
            </div>
        </li>
    );
};

export default Ticket;