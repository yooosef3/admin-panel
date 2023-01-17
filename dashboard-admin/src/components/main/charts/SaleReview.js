import { BsArrowUpShort } from "react-icons/bs";
import React from "react";
import SaleChart from "./SaleChart";
import styled from "styled-components";

const SaleRe = styled.div`
  width: 312px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 15px 5px;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  @media (min-width: 450px) {
    width: 385px;
  }
  @media (min-width:640px) {
    width: 98%;
  }
  h3 {
    margin: 0 10px 0 0;
  }
  div {
    display: flex;
    align-items: flex-start;
    svg {
      font-size: 24px;
      font-weight: 600;
      color: green;
      margin-right: 5px;
    }
    h5 {
      margin: 0 4px;
      font-size: 18px;
    }
    span {
      color: gray;
    }
  }
`;
const SaleReview = () => {
  return (
    <SaleRe>
      <h3>نمودار فروش</h3>
      <div>
        <BsArrowUpShort />
        <h5>4%</h5>
        <span>در سال 1401</span>
      </div>
      <SaleChart />
    </SaleRe>
  );
};

export default SaleReview;
