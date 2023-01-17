import Factor from "./Factor";
import React from "react";
import styled from "styled-components";

const Facto = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  .factor-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h3{
      margin-bottom: 30px;
    }
    .view-all {
      font-family: "YekanBakh";
      color: #cb0c9f;
      background-color: transparent;
      border: 1px solid #cb0c9f;
      border-radius: 5px;
      padding: 7px 10px;
      font-size: 18px;
      height: 40px;
      font-weight: 600;
      margin-right: auto;
      cursor: pointer;
      transition: all .2s linear;
      &:hover {
        transform: scale(1.04);
        color: #ca3ba9;
        border-color: #ca3ba9;
      }
      &:focus{
        background-color: #cb0c9f;
        color: #ffff;
      }
    }
  }

  .factors-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 992px) {
    width: 30%;
    height: 480px;
  }

  @media (min-width: 1520px) {
    height: 495px;
  }
`;
const Factors = () => {
  return (
    <Facto>
      <div className="factor-header">
        <h3>فاکتورها</h3>
        <button className="view-all">نمایش همه</button>
      </div>
      <div className="factors-container">
        <Factor date='2 مهر 1402' hash='#MS-415646' price='$180' />
        <Factor date='23 شهریور 1402' hash='#RV-126749' price='$250' />
        <Factor date='2 مرداد 1402' hash='#FB-212562' price='$560' />
        <Factor date='12 تیر 1402' hash='#QW-103578' price='$120' />
        <Factor date='4 خرداد 1402' hash='#RV-126749' price='$300' />
      </div>
    </Facto>
  );
};

export default Factors;
