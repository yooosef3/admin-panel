import React, { useState } from "react";

import { AiFillStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import Widget from "./Widget";
import styled from "styled-components";

const Ind = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  .industry-header {
    display: flex;
    justify-content: space-between;
    h3 {
      margin: 0;
      color: rgb(26, 162, 192);
    }
    .industry-options {
      position: relative;
      svg {
        font-size: 22px;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          color: #0e8a80;
        }
      }
      .options {
        position: absolute;
        background-color: #ffff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        width: 150px;
        left: 0;
        border-radius: 6px;
        display: ${(props) => (props.indust ? "block" : "none")};
        p {
          margin: 2px 5px;
          border-radius: 6px;
          padding-right: 5px;
          cursor: pointer;
          transition: all 0.2s linear;
          &:hover {
            background-color: #e2e2e2;
            color: #0e8a80;
          }
        }
      }
    }
  }

  .industry-content {
    p {
      font-weight: 500;
      color: gray;
    }

    .industry,
    .rating,
    .members {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #dbdbdb;
      h3 {
        margin: 10px 0;
      }
      svg{
        color: #344767;
      }
    }

    .industry {
      span {
        background-color: #dee3e4;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        padding: 0 10px;
        color: #344767;
      }
    }
  }
`;

const Industry = ({name, design}) => {
  const [indust, setIndust] = useState(false);

  return (
    <Ind indust={indust}>
      <div className="industry-header">
        <h3> {name}</h3>
        <div className="industry-options">
          <BsThreeDotsVertical onClick={() => setIndust(!indust)} />
          <div className="options">
            <p>صنعت</p>
            <p>رتبه</p>
            <p>اعضا</p>
          </div>
        </div>
      </div>
      <div className="industry-content">
        <p>
          گروهی از افراد که مجموعاً مسئول تمام کارهای لازم برای تولید دارایی های
          معتبر هستند.
        </p>
        <div className="industry">
          <h3>صنعت:</h3>
          <span>{design}</span>
        </div>
        <div className="rating">
          <h3>رتبه بندی:</h3>
          <div className="rating-stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <FaStarHalfAlt />
          </div>
        </div>
        <div className="members">
          <h3>اعضا:</h3>
          <Widget />
        </div>
      </div>
    </Ind>
  );
};

export default Industry;
