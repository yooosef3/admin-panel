import { BsArrowUpShort } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { GiTwoCoins } from "react-icons/gi";
import { HiBell } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import React from "react";
import { SiHtml5 } from "react-icons/si";
import styled from "styled-components";

const Rev = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  background-color: #ffff;
  padding: 15px;
  @media (min-width: 992px) {
    margin-top: 20px;
    width: 30%;
  }
  div {
    display: flex;
    svg {
      color: green;
      font-size: 20px;
    }
    span {
      font-weight: 600;
      color: black;
      margin: 0 4px;
    }
    small {
      color: gray;
    }
  }

  .overview {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
    .item {
      display: flex;
      gap: 15px;
      &:first-of-type {
        svg {
          color: linear-gradient(310deg, #17ad37, #c1e823);
        }
      }
      &:nth-of-type(2) {
        svg {
          color: red;
        }
      }
      &:nth-of-type(3) {
        svg {
          color: #2161bb;
        }
      }
      &:nth-of-type(4) {
        svg {
          color: orange;
        }
      }
      &:nth-of-type(5) {
        svg {
          color: blueviolet;
        }
      }
      &:nth-of-type(6) {
        svg {
          color: brown;
        }
      }
      .svgs {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span {
          color: gray;
        }
      }
      .item-info {
        display: flex;
        flex-direction: column;
        h4 {
          margin: 0;
        }
        span {
          color: gray;
          font-size: 14px;
        }
      }
    }
  }
`;
const Review = () => {
  return (
    <Rev>
      <h3>سفارشات</h3>
      <div>
        <BsArrowUpShort />
        <span>24%</span>
        <smal>در این ماه</smal>
      </div>
      <div className="overview">
        <div className="item">
          <div className="svgs">
            <HiBell />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4>تغییرات طرح, $2400</h4>
            <span>22 آبان 7:20 PM</span>
          </div>
        </div>
        <div className="item">
          <div className="svgs">
            <SiHtml5 />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4> سفارش جدید</h4>
            <span>21 آبان 11:00 PM</span>
          </div>
        </div>
        <div className="item">
          <div className="svgs">
            <MdShoppingCart />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4>پرداختی های ماه مهر </h4>
            <span>21 آبان 9:30 PM</span>
          </div>
        </div>
        <div className="item">
          <div className="svgs">
            <MdPayment />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4> شماره کارت جدید اضافه شد</h4>
            <span>20 آبان 2:30 AM</span>
          </div>
        </div>
        <div className="item">
          <div className="svgs">
            <FiKey />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4> باز شدن قفل پکیج ها برای برنامه نویسان</h4>
            <span>19 آبان 4:40 AM</span>
          </div>
        </div>
        <div className="item">
          <div className="svgs">
            <GiTwoCoins />
            <span>|</span>
          </div>
          <div className="item-info">
            <h4> سفارش جدید</h4>
            <span>17 آبان</span>
          </div>
        </div>
      </div>
    </Rev>
  );
};

export default Review;
