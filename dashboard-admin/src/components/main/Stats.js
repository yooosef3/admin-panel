import { FaCoins } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import React from "react";
import styled from "styled-components";

const Static = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto !important;
  @media (min-width: 768px) {
    flex-direction:row;
    flex-wrap: wrap;
  }
  .stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #ffff;
    flex-grow: 1;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 15px;
    h3 {
      color: #9e9e9e;
      margin: 0;
    }
    .amount {
      display: flex;
      align-items: baseline;
      gap: 10px;
      h2 {
        margin: 0;
        font-weight: 800;
      }
    }
    svg {
      font-size: 34px;
      background-image: linear-gradient(310deg, #7928ca, #ff0080);
      color: #ffff;
      padding: 10px;
      border-radius: 6px;
    }
    span {
      font-weight: 800;
      color: green;
    }
    &:nth-of-type(3) {
      span {
        color: red;
      }
    }
  }
`;
const Stats = () => {
  return (
    <Static>
      <div className="stat">
        <div>
          <h3>درآمد</h3>
          <div className="amount">
            <h2>$53,000</h2>
            <span>55%+</span>
          </div>
        </div>
        <FaCoins />
      </div>
      <div className="stat">
        <div>
          <h3>کاربران امروز</h3>
          <div className="amount">
            <h2>2,300</h2>
            <span>3%+</span>
          </div>
        </div>
        <HiUsers />
      </div>
      <div className="stat">
        <div>
          <h3>کاربران جدید</h3>
          <div className="amount">
            <h2>3,462+</h2>
            <span>2%-</span>
          </div>
        </div>
        <FaUserPlus />
      </div>
      <div className="stat">
        <div>
          <h3>فروش</h3>
          <div className="amount">
            <h2>$103,430</h2>
            <span>5%+</span>
          </div>
        </div>
        <HiShoppingCart />
      </div>
    </Static>
  );
};

export default Stats;
