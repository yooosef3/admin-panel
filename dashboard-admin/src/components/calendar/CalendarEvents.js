import CalendarTable from './month/CalendarTable';
import EventProduct from './EventProduct';
import React from 'react';
import styled from 'styled-components';

const CalE = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const CalendarEvents = () => {
    return (
        <CalE>
            <CalendarTable />
            <EventProduct />
        </CalE>
    );
};

export default CalendarEvents;