import { HiOutlinePaperClip } from "react-icons/hi";
import React from "react";
import styled from "styled-components";
import zeynab from "../../assets/images/kal-visuals-square.22829a59.jpg";
import ziba from "../../assets/images/team-5.bba518ed.jpg";

const Progress = styled.div`
  padding: 0 5px;
  background-color: #ffff;
  span {
    color: #ffff;
    background-image: ${props => props.percent > '60%' ? 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))' : 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'};
    padding: 0 5px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }

  p {
    color: gray;
    font-weight: 500;
    margin: 10px 0 0;
  }

  .percent-container {
    position: relative;
    height: 2px;
    width: 100%;
    margin-bottom: 15px;
    background-color: rgb(233, 236, 239);
    .percent {
      position: absolute;
      right: 0;
      bottom: -1px;
      border-radius: 10px;
      height: 5px;
      background:${props => props.percent > '60%' ? 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))' : 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'};
    }
  }

  .members {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .count {
      display: flex;
      gap: 4px;
      justify-content: flex-start;
      svg {
        color: gray;
      }
      small {
        color: gray;
      }
    }
    .team {
      display: flex;
      img {
        width: 23px;
        border: 2px solid #ffff;
        border-radius: 50%;
        margin: 0 -5px;
        cursor: pointer;
        &:hover {
          z-index: 6;
        }
      }
    }
  }
`;

const DragProgress = ({ status, text, percent }) => {
  return (
    <Progress percent={percent}>
      <span>{status}</span>
      <p>{text}</p>
      <div className="percent-container">
        <div className="percent" style={{width: `${percent}`}}></div>
      </div>
      <div className="members">
        <div className="count">
          <HiOutlinePaperClip />
          <small>2</small>
        </div>
        <div className="team">
          <img alt="team" src={zeynab} />
          <img alt="team" src={ziba} />
        </div>
      </div>
    </Progress>
  );
};

export default DragProgress;
