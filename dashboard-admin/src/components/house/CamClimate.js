import Camera from './Camera';
import Climate from './climate/Climate';
import React from 'react';
import styled from 'styled-components';

const CamCli = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: flex-start;
    }
`
const CamClimate = () => {
    return (
        <CamCli>
            <Camera />
            <Climate />
        </CamCli>
    );
};

export default CamClimate;