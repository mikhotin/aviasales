import React from 'react';

import TicketItem from '../Ticket/Ticket';
import Ticket from '../../types';

import styles from './TicketList.module.css';

const TicketsList = (props: { tickets:Ticket[] } ) => {
    const tickets = props.tickets;

    return (
        <ul className={styles.list}>
            {tickets.map((item:Ticket, index: number) => <TicketItem key={index} item={item} />)}
        </ul>
    );
};


export default TicketsList;