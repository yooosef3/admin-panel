import React from 'react';
import styled from 'styled-components';

const Stor = styled.div`
text-align: center;
    img{
        width: 50px;
        border-radius: 50%;
        border: 4px solid #ff4d00;
        cursor: pointer;
    }
    h5{
        margin: 0;
    }
`
const Story = ({image, name}) => {
    return (
        <Stor>
            <img alt='story' src={image}/>
            <h5>{name}</h5>
        </Stor>
    );
};

export default Story;