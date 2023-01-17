import { BsCircle } from "react-icons/bs";
import React from "react";
import styled from "styled-components";

const Step = styled.div`
  width: 85%;
  height: 1px;
  margin: 100px auto;
  position: relative;
  @media (min-width: 1535px) {
    .progress {
      position: absolute;
      width: ${(props) => props.path === "/homepage/newuser" && "35px"};
      width: ${(props) =>
        props.path === "/homepage/newuser/addressform" && "285px"};
      width: ${(props) =>
        props.path === "/homepage/newuser/socialform" && "543px"};
      width: ${(props) =>
        props.path === "/homepage/newuser/profileform" && "840px"};
      height: 4px;
      bottom: -1px;
      border-radius: 10px;
      background-color: rgb(52, 71, 103);
    }
  }
  background-color: #a0a0a0;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1200px) {
    width: 70%;
  }
  .step {
    text-align: center;
    margin-top: -8px;

    h3 {
      margin: 0;
      color: #bdbdbd;
      font-size: 16px !important;
      @media (min-width: 460px) {
            font-size: 18px;
          }
    }
    svg {
      color: #bdbdbd;
      background-color: #ffff;
      border-radius: 50%;
      font-size: 16px;
    }

    h3 {
      color: ${(props) =>
        props.path === "/homepage/newuser/profileform" && "rgb(52, 71, 103)"};
      margin: 0;
      font-size: 18px;
    }
    svg {
      background-color: ${(props) =>
        props.path === "/homepage/newuser/profileform" && "rgb(52, 71, 103)"};
      border-radius: 50%;
      font-size: 16px;
    }

    &:nth-of-type(1) {
      h3 {
        color: ${(props) =>
          props.path === "/homepage/newuser" && "rgb(52, 71, 103)"};
      }
      svg {
        background-color: ${(props) =>
          props.path === "/homepage/newuser" && "rgb(52, 71, 103)"};
      }
    }
    &:nth-of-type(2) {
      h3 {
        color: ${(props) =>
          props.path === "/homepage/newuser/addressform" && "rgb(52, 71, 103)"};
      }
      svg {
        background-color: ${(props) =>
          props.path === "/homepage/newuser/addressform" && "rgb(52, 71, 103)"};
      }
    }
    &:nth-of-type(3) {
      h3 {
        color: ${(props) =>
          props.path === "/homepage/newuser/socialform" && "rgb(52, 71, 103)"};
      }
      svg {
        background-color: ${(props) =>
          props.path === "/homepage/newuser/socialform" && "rgb(52, 71, 103)"};
      }
    }
  }
`;

const UserSteps = ({ path }) => {
  return (
    <Step path={path}>
      <div className="progress"></div>
      <div className="step">
        <BsCircle />
        <h3>اطلاعات کاربر</h3>
      </div>
      <div className="step">
        <BsCircle />
        <h3>آدرس</h3>
      </div>
      <div className="step">
        <BsCircle />
        <h3>شبکه اجتماعی</h3>
      </div>
      <div className="step">
        <BsCircle />
        <h3>پروفایل</h3>
      </div>
    </Step>
  );
};

export default UserSteps;
