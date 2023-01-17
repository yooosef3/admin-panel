import ActiveChart from './ActiveChart';
import React from 'react';
import SaleReview from './SaleReview';
import styled from 'styled-components';

const Chart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    @media (min-width:992px) {
    flex-direction:row;
  }
` 
const Charts = () => {
    return (
        <Chart>
            <ActiveChart />
            <SaleReview />
        </Chart>
    );
};

export default Charts;