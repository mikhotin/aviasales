import React, { useState, useReducer, useEffect } from 'react';
import { initialState, reducer, State } from './store';

import FilterWithTransfer from './components/Filters/FilterWithTransfer/FilterWithTransfer';
import Filter from './components/Filters/Filter/Filter';
import TicketsList from './components/TicketsList/TicketsList';
import fetchData from './api';
import { mainSort } from './utils/sorts';
import { COUNT_ITEM_IN_VIEW } from './consts';
import Ticket from './types';

const App = () => {
    const [ticketsColl, setTickets] = useState<Ticket[]>([]);
    const [ticketsInView, setTicketsInView] = useState<Ticket[]>([]);
    const [offset, setNewOffset] = useState<number>(COUNT_ITEM_IN_VIEW);
    const [filters, dispatch] = useReducer(reducer, initialState);

    const showMoreTickets = (): void => setNewOffset(offset + COUNT_ITEM_IN_VIEW);

    useEffect(() => {
        fetchData().then(({ tickets }) => {
            setTickets(tickets);
            setTicketsInView(mainSort('cheaper', tickets.slice(0, offset)));
        });
    }, []);

    useEffect(() => {
        setTicketsInView(ticketsColl.slice(0, offset));
    }, [offset]);

    useEffect(() => {
        setTicketsInView(mainSort(filters.mainFilter, ticketsInView));
    }, [filters]);

    return (
        <div className="container">
            <FilterWithTransfer dispatch={dispatch}/>
            <div className="wrapper">
                <Filter filter={filters.mainFilter} dispatch={dispatch}/>
                <TicketsList tickets={ticketsInView}/>
                <button className="btn-show" onClick={showMoreTickets}>Показать еще 5 билетов!</button>
            </div>
        </div>
    );
};

export default App;