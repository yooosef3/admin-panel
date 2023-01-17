import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ImHeadphones } from "react-icons/im";
import React from "react";
import styled from "styled-components";

const Head = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-bottom: 1px solid gray;
    padding: 20px;
    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
    }
    .search{
        display: flex;
        width: fit-content;
        height: 35px;
        svg{
            color: #ffff;
            background-color: grey;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            padding: 2px;
            height: 100%;
            cursor: pointer;
            transition: all .2s linear;
            &:hover{
                background-color: #6a6a6a;
            }
        }
        input{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border: 1px solid gray;
            outline: 0;
            height: 100%;
            padding-right: 5px;
        }
    }
    .play-radio{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 22px;
        svg{
            color: #ffff;
            font-size: 22px;
            cursor: pointer;
        }
        h2{
            color: #ffff;
            margin:9px 0 0;
        }
    }
`;

const MonitorHeader = () => {
  return (
    <Head>
      <div className="search">
        <FiSearch />
        <input type='text' placeholder='جستجو...'/>
      </div>
      <div className="play-radio">
        <ImHeadphones />
        <BsFillPlayFill />
        <FaPowerOff />
        <BsFillStopwatchFill />
        <h2>10:45</h2>
      </div>
    </Head>
  );
};

export default MonitorHeader;
