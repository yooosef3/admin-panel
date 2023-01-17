import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";
import factor1 from '../../assets/factor1.pdf'
import styled from "styled-components";

const Ino = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .date {
    h3 {
      margin: 5px 0;
    }
    span {
      color: gray;
    }
  }
  .pdf {
    display: flex;
    align-items: baseline;
    gap: 30px;
    p{
        color: gray;
        font-weight: 600;
    }
    .pdf-file {
      display: flex;
      align-items: baseline;
      gap: 5px;
      svg {
        font-size: 22px;
        color: #202550;
        transition: all 0.2s linear;
      }
      h3 {
        transition: all 0.2s linear;
      }
      &:hover {
        svg,
        h3 {
          color: red;
        }
      }
    }
  }
`;

const Factor = ({ date, hash, price }) => {
  return (
    <Ino>
      <div className="date">
        <h3>{date}</h3>
        <span>{hash}</span>
      </div>
      <div className="pdf">
        <p>{price}</p>
        <Link to={factor1} target='_blank' download className="pdf-file">
          <BsFileEarmarkPdfFill />
          <h3>PDF</h3>
        </Link>
      </div>
    </Ino>
  );
};

export default Factor;
