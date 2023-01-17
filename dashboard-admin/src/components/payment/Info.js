import BillInfo from './BillInfo';
import React from 'react';
import Transactions from './Transactions';
import styled from 'styled-components'

const Inf = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
}
`

const Info = () => {
    return (
        <Inf>
            <BillInfo />
            <Transactions />
        </Inf>
    );
};

export default Info;