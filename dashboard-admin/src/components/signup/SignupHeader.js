import React from "react";
import header from "../../assets/images/curved0.d146ec6e.jpg";
import styled from "styled-components";

const SignH = styled.div`
  position: relative;
  margin-top: 30px;
  z-index: -5;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .welcome {
    position: absolute;
    top: -5px;
    right: 0;
    width: 100%;
    text-align: center;
    @media (min-width: 460px) {
      top: 0;
    }
    @media (min-width: 1200px) {
      top: 30%;
    }
    h1 {
      margin: 0;
      color: #ffff;
    }
    p {
      margin: 0;
      color: #ffff;
      font-weight: 600;
    }
  }
`;

const SignupHeader = () => {
  return (
    <SignH>
      <img alt="signup" src={header} />
      <div className="welcome">
        <h1>خوش آمدید!</h1>
        <p> برای ورود به سایت لطفا موارد لازم را پر کنید </p>
      </div>
    </SignH>
  );
};

export default SignupHeader;
