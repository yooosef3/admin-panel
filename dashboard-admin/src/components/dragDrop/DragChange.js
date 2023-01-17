import { HiOutlinePaperClip } from "react-icons/hi";
import React from "react";
import styled from "styled-components";
import zeynab from "../../assets/images/kal-visuals-square.22829a59.jpg";
import ziba from "../../assets/images/team-5.bba518ed.jpg";

const Change = styled.div`
  padding: 0 5px;
  background-color: #ffff;
  span {
    background-image: ${props => props.step === 1 ? 'linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))'
                               : props.step === 2 ? 'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))'
                               : props.step === 3 ? 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))'
                               : 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'};
    border-radius: 6px;
    color: #ffff;
    font-weight: 600;
    font-size: 12px;
    padding: 0 5px;
  }
  p {
    color: gray;
    font-weight: 500;
    margin: 5px 0;
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

const DragChange = ({ status, type, count, step }) => {
  return (
    <Change step={step}>
      <span>{status}</span>
      <p>{type}</p>
      <div className="members">
        <div className="count">
          <HiOutlinePaperClip />
          <small>{count}</small>
        </div>
        <div className="team">
          <img alt="team" src={zeynab} />
          <img alt="team" src={ziba} />
        </div>
      </div>
    </Change>
  );
};

export default DragChange;
