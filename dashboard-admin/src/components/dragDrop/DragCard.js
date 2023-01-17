import { HiOutlinePaperClip } from "react-icons/hi";
import React from "react";
import narges from "../../assets/images/ivana-squares.123e41b2.jpg";
import naz from "../../assets/images/ivana-square.b04026bd.jpg";
import styled from "styled-components";
import zeynab from "../../assets/images/kal-visuals-square.22829a59.jpg";
import ziba from "../../assets/images/team-5.bba518ed.jpg";

const Card = styled.div`
  border-radius: 6px;
  img {
    width: 100%;
    border-radius: 4px;
  }
  span {
    color: #ffff;
    font-size: 10px;
    font-weight: 600;
    padding: 1px 7px;
    border-radius: 6px;
    background-image: ${(props) =>
      props.progress
        ? "linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))"
        : "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))"};
    background-image: ${(props) =>
      props.status === "تکمیل شده" &&
      "linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))"};
  }

  p {
    color: gray;
    font-size: 14px;
    font-weight: 500;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .clip {
      display: flex;
      svg {
        color: gray;
        margin-left: 5px;
      }
      h5 {
        color: gray;
        margin: 0;
      }
    }
    .members {
      img {
        width: 20px;
        border-radius: 50%;
        margin: 0 -3px;
        border: 2px solid #ffff;
        cursor: pointer;
        &:hover {
          z-index: 6;
        }
      }
    }
  }
`;

const DragCard = ({ img, status, text, progress }) => {
  return (
    <Card progress={progress} status={status}>
      <img src={img} alt="card" />
      <span>{status}</span>
      <p>{text}</p>
      <div className="card-footer">
        <div className="clip">
          <HiOutlinePaperClip />
          <h5>4</h5>
        </div>
        <div className="members">
          <img alt="team" src={ziba} />
          <img alt="team" src={naz} />
          <img alt="team" src={zeynab} />
          <img alt="team" src={narges} />
        </div>
      </div>
    </Card>
  );
};

export default DragCard;
