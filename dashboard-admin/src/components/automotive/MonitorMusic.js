import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsFillPauseFill } from "react-icons/bs";
import React from "react";
import { RiSkipBackFill } from "react-icons/ri";
import { RiSkipForwardFill } from "react-icons/ri";
import Volume from "./Volume";
import logo from "../../assets/images/curved10.fea9af7a.jpg";
import spotify from "../../assets/images/logo-spotify.3f055cde.svg";
import styled from "styled-components";

const Music = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding:40px 20px 20px;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    gap: 80px;
  }
  .music {
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 80px;
    }
    .music-name {
      display: flex;
      align-items: center;
      gap: 22px;
      .music-logo {
        width: fit-content;
        position: relative;
        img {
          &:first-of-type {
            width: 60px;
            border-radius: 50%;
          }
          &:last-of-type {
            width: 35px;
            position: absolute;
            left: -15px;
            bottom: 5px;
          }
        }
      }
      .music-info {
        h3 {
          color: #ffff;
          margin: 0;
        }
        span {
          color: #d2d2d2;
        }
      }
    }
    .music-btns {
      display: flex;
      justify-content: center;
      gap: 25px;
      svg {
        color: #ffff;
        font-size: 26px;
        border: 1px solid #ffff;
        border-radius: 50%;
        padding: 10px;
        transition: all 0.2s linear;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.1);
        &:hover {
          background-color: #2b2a6a;
        }
      }
    }
  }
  .music-volume {
    display: flex;
    gap: 20px;
    align-items: baseline;
    .music-slider {
      width: 250px;
      h3 {
        color: #ffff;
        margin: 0 0 2px 0;
      }
    }
    .music-menu {
      display: flex;
      gap: 15px;
      svg{
        color: #ffff;
        font-size: 22px;
      }
    }
  }
`;
const MonitorMusic = () => {
  return (
    <Music>
      <div className="music">
        <div className="music-name">
          <div className="music-logo">
            <img alt="logo" src={logo} />
            <img alt="spotify" src={spotify} />
          </div>
          <div className="music-info">
            <h3>The world (feat SnopDog)</h3>
            <span>Michael Jackson</span>
          </div>
        </div>
        <div className="music-btns">
          <RiSkipForwardFill />
          <BsFillPauseFill />
          <RiSkipBackFill />
        </div>
      </div>
      <div className="music-volume">
        <div className="music-slider">
          <h3>میزان صدا</h3>
          <Volume />
        </div>
        <div className="music-menu">
          <AiOutlineMenuUnfold />
          <BiComment />
        </div>
      </div>
    </Music>
  );
};

export default MonitorMusic;
