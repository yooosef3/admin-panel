import React from 'react';
import mari from "../../assets/images/marie.1c682842.jpg";
import narges from "../../assets/images/ivana-squares.123e41b2.jpg";
import naz from "../../assets/images/ivana-square.b04026bd.jpg";
import styled from "styled-components";
import zeynab from "../../assets/images/kal-visuals-square.22829a59.jpg";
import ziba from "../../assets/images/team-5.bba518ed.jpg";

const Team = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: auto;
    gap: 70px;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 6px;
    padding:0 15px;
    width: fit-content;
    p{
        color: #ffff;
        background: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
        padding:0px 15px;
        font-weight: 800;
        font-size: 30px;
        border-radius: 8px;
        cursor: pointer;
    }
    .members{
        h3{
            margin: 0;
        }
        .team{
            img{
                width: 35px;
                border-radius: 50%;
                cursor: pointer;
                margin: 0 -6px;
                border: 4px solid #ffff;
                &:hover{
                    z-index: 5;
                    border: 4px solid #199fb6;
                }
            }
        }
    }
`;

const TeamMember = () => {
    return (
        <Team>
            <div className='members'>
                <h4>اعضای گروه:</h4>
                <div className='team'>
                    <img alt='team' src={ziba}/>
                    <img alt='team' src={naz}/>
                    <img alt='team' src={zeynab}/>
                    <img alt='team' src={narges}/>
                    <img alt='team' src={mari}/>
                </div>
            </div>
            <p>+</p>
        </Team>
    );
};

export default TeamMember;