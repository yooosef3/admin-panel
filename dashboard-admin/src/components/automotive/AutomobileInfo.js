import { AiFillBank } from "react-icons/ai";
import { GiBattery100 } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineSpeed } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const AutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .auto-item {
    flex-grow: 1;
    background-image: linear-gradient(
      310deg,
      rgb(98, 117, 148),
      rgb(168, 184, 216)
    );
    border-radius: 6px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      margin: 0;
      color: #d1d1d1;
      font-size: 22px;
    }
    h3 {
      color: #ffff;
      font-weight: 600;
      font-size: 26px;
      margin: 0;
    }
    svg {
      color: #35405a;
      background-color: #ffff;
      padding: 10px;
      font-size: 30px;
      border-radius: 8px;
    }
  }
`;
const AutomobileInfo = () => {
  return (
    <AutoInfo>
      <div className="auto-item">
        <div className="item-info">
          <h4>میزان صدا</h4>
          <h3>15/100</h3>
        </div>
        <ImHeadphones />
      </div>
      <div className="auto-item">
        <div className="item-info">
          <h4>میانگین سرعت</h4>
          <h3> 56Km/h </h3>
        </div>
        <MdOutlineSpeed />
      </div>
      <div className="auto-item">
        <div className="item-info">
          <h4>سلامت باطری</h4>
          <h3>99%</h3>
        </div>
        <GiBattery100 />
      </div>
      <div className="auto-item">
        <div className="item-info">
          <h4>گردش امروز</h4>
          <h3>145Km</h3>
        </div>
        <AiFillBank />
      </div>
    </AutoInfo>
  );
};

export default AutomobileInfo;
