import { FaTools } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdPointOfSale } from "react-icons/md";
import React from "react";
import { TbClick } from "react-icons/tb";
import styled from "styled-components";

const Active = styled.div`
  .activities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    .svg {
      display: flex;
      align-items: center;
      gap: 8px;
      span {
        color: gray;
        margin: 0;
        padding: 5px 0 0;
        font-weight: 500;
      }
      svg {
        color: #ffff;
        padding: 5px;
        border-radius: 6px;
      }
    }

    h2 {
      font-size: 30px;
      font-weight: 800;
      margin: 10px 0;
    }

    .activity {
      width: 100px;
      margin-top: 20px;
      &:first-of-type {
        svg {
          background-image: linear-gradient(310deg, #7928ca, #ff0080);
        }
        .progress-bar {
          width: 60%;
          height: 10px;
          border-radius: 6px;
          position: absolute;
          top: -2px;
          background-color: #1e1a4d;
        }
      }
      &:nth-of-type(2) {
        svg {
          background-image: linear-gradient(310deg, #2152ff, #21d4fd);
        }
        .progress-bar {
          width: 90%;
          height: 10px;
          border-radius: 6px;
          position: absolute;
          top: -2px;
          background-color: #1e1a4d;
        }
      }
      &:nth-of-type(3) {
        svg {
          background-image: linear-gradient(310deg,#f53939,#fbcf33);
        }
        .progress-bar {
          width: 20%;
          height: 10px;
          border-radius: 6px;
          position: absolute;
          top: -2px;
          background-color: #1e1a4d;
        }
      }
      &:nth-of-type(4) {
        svg {
          background-image: linear-gradient(310deg,#ea0606,#ff667c);
        }
        .progress-bar {
          width: 50%;
          height: 10px;
          border-radius: 6px;
          position: absolute;
          top: -2px;
          background-color: #1e1a4d;
        }
      }
    }
  }

  .progress {
    width: 100%;
    height: 5px;
    background-color: #d4d4d4;
    position: relative;
    border-radius: 6px;
  }
`;
const Activity = () => {
  return (
    <Active>
      <div className="activities">
        <div className="activity">
          <div className="svg">
            <HiUsers />
            <span>کاربران</span>
          </div>
          <h2>26K</h2>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="activity">
          <div className="svg">
            <TbClick />
            <span>کلیک</span>
          </div>
          <h2>2m</h2>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="activity">
          <div className="svg">
            <MdPointOfSale />
            <span>فروش</span>
          </div>
          <h2>$435</h2>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="activity">
          <div className="svg">
            <FaTools />
            <span>آیتم ها</span>
          </div>
          <h2>43</h2>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </Active>
  );
};

export default Activity;
