import { Outlet } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    margin-top: 200px;
    @media (min-width: 640px) {
        margin-top: 120px;
    }
    @media (min-width: 768px) {
        margin-top: 65px;
    }
`

const InfoSetting = () => {
    return (
        <Info>
            <Outlet />
        </Info>
    );
};

export default InfoSetting;