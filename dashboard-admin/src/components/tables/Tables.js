import React, { useContext } from 'react';

import Authors from './Authors';
import Footer from '../Footer';
import Navbar from '../navbar/Navbar';
import Work from './Work';
import { fixedContext } from '../../App';
import styled from 'styled-components';

const Table = styled.div`
    margin: 0 auto;
    padding-top: ${props => props.fixed ? '170px' : '0px'};
    @media (min-width: 992px) {
        padding-top: ${props => props.fixed ? '100px' : '0px'};
    }
    @media (min-width: 1200px) {
        width: 80%;
    }
`
const Tables = () => {
    const {fixed} = useContext(fixedContext)

    return (
        <Table fixed={fixed}>
            <Navbar route={'جداول'}/>
            <Authors />
            <Work />
            <Footer />
        </Table>
    );
};

export default Tables;