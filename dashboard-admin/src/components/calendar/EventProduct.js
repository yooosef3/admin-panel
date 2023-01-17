import Events from './Events';
import Productivity from './Productivity';
import React from 'react';
import styled from 'styled-components';

const EventP = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 1200px) {
        width: 30%;
    }
`;
const EventProduct = () => {
    return (
        <EventP>
            <Events />
            <Productivity />
        </EventP>
    );
};

export default EventProduct;