import React from 'react';

import TicketItem from '../Ticket/Ticket';
import Ticket from '../../types';

import styles from './TicketList.module.css';

const TicketsList = (props: { tickets:Ticket[] } ) => {
    return (
        <ul className={styles.list}>
            {props.tickets.map((item:Ticket, index: number) => <TicketItem key={index} item={item} />)}
        </ul>
    );
};


export default TicketsList;