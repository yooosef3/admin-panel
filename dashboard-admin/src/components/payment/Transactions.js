import { FcCalendar } from "react-icons/fc";
import Loader from '../shared/Loader';
import React from "react";
import { TRANSACTIONS } from "../../graphql/querries";
import Transaction from "./Transaction";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Trans = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  .transactions-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .calendar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      svg {
        font-size: 24px;
      }
      span{
        margin: 0;
        padding:6px 0 0;
        color: gray;
      }
    }
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const Transactions = () => {
  const {loading, data, error} = useQuery(TRANSACTIONS);
  
  return (
    <Trans>
      <div className="transactions-header">
        <h3>تراکنش های شما</h3>
        <div className="calendar">
          <FcCalendar />
          <span>20-30 آبان 1401</span>
        </div>
      </div>
      <div className="transactions">
        <h3>جدیدترین</h3>
          {
            loading ? <Loader />:
            error ? <p style={{color:'red'}}>یک خطای شبکه رخ داده است, بعدا تلاش کنید</p>:
            data.transactions.slice(0,2).map(transaction => {return <Transaction key={transaction.id} {...transaction}/>})
          }
        <h3>دیروز</h3>
        {
            loading ? <Loader />:
            error ? <p style={{color:'red'}}>یک خطای شبکه رخ داده است, بعدا تلاش کنید</p>:
            data.transactions.slice(2).map(transaction => {return <Transaction key={transaction.id} {...transaction}/>})
          }
      </div>
    </Trans>
  );
};

export default Transactions;
