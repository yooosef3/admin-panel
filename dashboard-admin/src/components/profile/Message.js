import React from 'react';
import styled from 'styled-components';

const Mes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar{
        display: flex;
        align-items: center;
        gap: 15px;
        img{
            width: 50px;
            border-radius: 8px;
        }
        h4{
            margin: 0;
        }
        span{
            color: gray;
        }
    }
    h3{
        color: gray;
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
            color: blue;
        }
    }
`
const Message = ({image, name, message}) => {
    return (
        <Mes>
            <div className='avatar'>
                <img alt='message' src={image}/>
                <div className='name-msg'>
                    <h4>{name}</h4>
                    <span>{message}</span>
                </div>
            </div>
            <h3>پاسخ</h3>
        </Mes>
    );
};

export default Message;