import React, { useState } from 'react';

import { BsThreeDotsVertical } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styled from 'styled-components'

const Done = styled.div`
    background-color: #ffff;
    padding: 15px;
    display: flex;
    width: 875px;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 992px) {
        width: 745px;
    }
    .projects-header{
        .tick{
            display: flex;
            gap: 5px;
            svg{
                color: #0099ff;
                font-size: 20px;
            }
            span{
                &:first-of-type{
                    font-weight: 600;
                    color: gray;
                }
                &:last-of-type{
                    color: black;
                    font-weight: 200;
                }
            }
        }
    }
    .dots{
        position: relative;
        font-size: 22px;
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
            color: #0099ff;
        }
        .projects-status{
            position: absolute;
            background-color: #ffff;
            border-radius: 6px;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            left: 10px;
            width: 150px;
            top: 0;
            padding: 4px;
            list-style: none;
            display: ${props => props.dots ? 'block' : 'none'};
            li{
                color: gray;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all .2s linear;
                padding-right: 5px;
                margin: 3px 0;
                &:hover{
                    color: #0099ff;
                }
            }
        }
    }
    
`
const DoneProjects = () => {
    const [dots, setDots] = useState(false);
    return (
        <Done dots = {dots}>
            <div className="projects-header">
                <h3>پروژه ها</h3>
                <div className="tick">
                    <TiTick />
                    <span>30 پروژه انجام شده</span>
                    <span>در این ماه</span>
                </div>
            </div>
            <div className="dots">
                <BsThreeDotsVertical onClick={() => setDots(!dots)}/>
                <ul className="projects-status">
                    <li>پروژه های تکمیل شده</li>
                    <li>پروژه های در حال انجام</li>
                    <li>پروژه های کنسل شده</li>
                </ul>
            </div>
        </Done>
    );
};

export default DoneProjects;