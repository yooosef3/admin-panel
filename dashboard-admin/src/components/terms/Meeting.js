import React from 'react';
import Widget from './Widget';
import styled from 'styled-components';

const Meet = styled.div`
    background-color: #ffff;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 15px;
    .meeting-header{
        display: flex;
        gap: 10px;
        img{
            width: 65px;
        }
        .meeting-info{
            h3{
                margin:5px 0 0;
            }
            small{
                color: gray;
            }
        }
    }

    .meeting-content{
        p{
            color: gray;
            font-weight: 500;
            margin-top: 25px;
        }
        h3{
            display: flex;
            align-items: center;
            span{
                color: gray;
                font-weight: 500;
                margin-right: 10px;
            }
        }
        .meeting-join{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #dbdbdb;
            padding-top: 15px;
            span{
                color: #ffff;
                font-weight: 500;
                background: linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45));
                padding: 0 10px;
                border-radius: 6px;
                transition: all .2s linear;
                cursor: pointer;
                &:hover{
                    opacity: 90%;
                }
            }
        }
    }
`;

const Meeting = ({name, time, text, code, logo}) => {
    return (
        <Meet>
            <div className='meeting-header'>
                <img alt='meeting' src={logo}/>
                <div className='meeting-info'>
                    <h3>{name}</h3>
                    <small dir='ltr'>{time}</small>
                </div>
            </div>
            <div className='meeting-content'>
                <p>{text}</p>
                <h3>کد وبینار: <span>{code}</span></h3>
                <div className='meeting-join'>
                    <span>عضویت</span>
                    <Widget />
                </div>
            </div>
        </Meet>
    );
};

export default Meeting;