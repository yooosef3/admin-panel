import React, { useContext } from 'react';

import Billing from './Billing';
import Footer from '../Footer';
import Info from './Info';
import Navbar from '../navbar/Navbar';
import { fixedContext } from '../../App';
import styled from 'styled-components';

const Pay = styled.div`
    margin: 0 auto;
    padding-top: ${props => props.fixed ? '170px' : '0px'};
    @media (min-width: 992px) {
        padding-top: ${props => props.fixed ? '100px' : '0px'};
    }
    @media (min-width: 1200px) {
        width: 80%;
    }
`
const Payment = () => {
    const {fixed} = useContext(fixedContext);
    return (
        <Pay fixed={fixed}>
            <Navbar route={'پرداخت'}/>
            <Billing />
            <Info />
            <Footer />
        </Pay>
    );
};

export default Payment;