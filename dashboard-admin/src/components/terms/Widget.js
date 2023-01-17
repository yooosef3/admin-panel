import React from 'react';
import ali from "../../assets/images/team-17-370x334.jpg";
import mari from "../../assets/images/marie.1c682842.jpg";
import narges from "../../assets/images/ivana-squares.123e41b2.jpg";
import naz from "../../assets/images/ivana-square.b04026bd.jpg";
import styled from 'styled-components';

const Widg = styled.div`
    display: flex;
    img{
        width: 25px;
        border: 3px solid #ffff;
        border-radius: 50%;
        margin: 0 -6px;
        cursor: pointer;
        &:hover{
            z-index: 5;
        }
    }
`

const Widget = () => {
    return (
        <Widg>
            <img alt='member' src={ali}/>
            <img alt='member' src={mari}/>
            <img alt='member' src={narges}/>
            <img alt='member' src={naz}/>
        </Widg>
    );
};

export default Widget;