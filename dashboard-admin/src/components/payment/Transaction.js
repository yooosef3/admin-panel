import { BsArrowUpCircle } from "react-icons/bs";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";

const Tran = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .svg-info {
    display: flex;
    align-items: center;
    gap: 20px;
    svg {
      font-size: 28px;
      color: ${(props) => (props.price > 0 ? "green" : "red")};
      transform: ${(props) => props.price < 0 && "rotate(180deg)"};
    }
    .info {
      h4 {
        margin: 0;
        font-size: 18px;
      }
      span {
        color: gray;
        font-size: 12px;
      }
    }
  }
  .transaction-price {
    color: ${(props) =>
      props.price > 0
        ? "green"
        : props.price < 0
        ? "red"
        : props.price === "در حال انتظار" && "gray"};
    font-weight: 600;
    font-size: 18px;
    direction: ltr;
  }
`;
const Transaction = ({ name, date, price }) => {
  return (
    <Tran price={price}>
      <div className="transaction-info">
        <div className="svg-info">
          {price === "در حال انتظار" ? (
            <RiErrorWarningLine style={{fontSize: '28px', color:'gray', marginLeft:'0px'}}/>
          ) : (
            <BsArrowUpCircle/>
          )}
          <div className="info">
            <h4>{name}</h4>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="transaction-price"> {price !== 'در حال انتظار' && '$'} {price} </div>
    </Tran>
  );
};

export default Transaction;
