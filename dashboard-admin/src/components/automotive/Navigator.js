import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
    .navigator-info{
        display: flex;
        align-items: center;
        gap: 15px;
        flex-grow: 1;
        h1{
            color: #ffff;
            margin: 0;
            sup{
                font-size: 14px;
            }
        }
        span{
            color: #d1d1d1;
            font-size: 18px;
            @media (min-width: 460px) {
                font-size: 20px;
            }
        }
        
    }
` 
const Navigator = () => {
    return (
        <Nav>
            <div className='navigator-info'>
                <h1>11:13</h1>
                <span>زمان تخمینی رسیدن به مقصد</span>
            </div>
            <div className='navigator-info'>
                <h1>2.4<sup>km</sup></h1>
                <span>2.4 مایلی به راست بپیچید</span>
            </div>
            <div className='navigator-info'>
                <h1>6.3<sup>km</sup></h1>
                <span> فاصله تا میدان ونک</span>
            </div>
        </Nav>
    );
};

export default Navigator;