import React, { useState, useReducer, useEffect } from 'react';
import { initialState, reducer } from './store';

import FilterWithTransfer from './components/Filters/FilterWithTransfer/FilterWithTransfer';
import Filter from './components/Filters/Filter/Filter';
import TicketsList from './components/TicketsList/TicketsList';
import fetchData from './api';
import Ticket from './types';

import prepareData from './utils/prepareData';

const App = () => {
    const [ticketsColl, setTickets] = useState<Ticket[]>([]);
    const [ticketsInView, setTicketsInView] = useState<Ticket[]>([]);
    const [offset, setNewOffset] = useState<number>(5);
    const [filters, dispatch] = useReducer(reducer, initialState);

    const showMore = (): void => setNewOffset((offset) => offset + 5);

    useEffect(() => {
        fetchData().then(({ tickets }) => {
            setTickets(tickets);
            setTicketsInView(tickets.slice(0, offset));
        });
    }, []);

    useEffect(() => {
        setTicketsInView(ticketsColl.slice(0, offset));
    }, [offset])

    return (
        <div className="container">
            <FilterWithTransfer dispatch={dispatch}/>
            <div className="wrapper">
                <Filter filter={filters.mainFilter} dispatch={dispatch}/>
                <TicketsList tickets={ticketsInView}/>
                <button onClick={showMore}>Показать еще 5 билетов</button>
            </div>
        </div>
    );
};

export default App;