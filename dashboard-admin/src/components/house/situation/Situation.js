import React, { useState } from "react";

import styled from "styled-components";

const Sit = styled.div`
  background-image: ${(props) =>
    props.on
      ? "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))"
      : "linear-gradient(310deg, rgb(255, 255, 255), rgb(255, 255, 255))"};
  border-radius: 6px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  h2,
  h3,
  small {
    color: ${(props) => (props.on ? "#ffff" : "#1c1c37")};
    margin: 0;
  }
  .up {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .off-on {
      width: 45px;
      height: 25px;
      margin-top: 5px;
      display: flex;
      position: relative;
      align-items: center;
      border-radius: 20px;
      padding: 0 1px;
      cursor: pointer;
      transition: all 0.2s linear;
      background-color: ${(props) => (props.on ? "#1c1c37" : "#cccccc")};
      div {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        position: absolute;
        transition: all 0.2s linear;
        left: ${(props) => (props.on ? "22.5px" : "1px")};
        background-color: #ffff;
      }
    }
  }

  .down {
    text-align: center;
    img {
      width: 140px;
      height: 140px;
      margin-top: 20px;
    }
  }
`;

const Situation = ({ icon, situation }) => {
  const [on, setOn] = useState(true);
  return (
    <Sit on={on}>
      <div className="up">
        {on ? <h3>روشن</h3> : <h3>خاموش</h3>}
        <section className="off-on" onClick={() => setOn(!on)}>
          <div></div>
        </section>
      </div>
      <div className="down">
        <img alt="situation" src={icon} />
        <h2>{situation}</h2>
        {on ? <small>فعال</small> : <small>غیرفعال</small>}
      </div>
    </Sit>
  );
};

export default Situation;
