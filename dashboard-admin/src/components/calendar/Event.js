import React from "react";
import styled from "styled-components";

const Ev = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  svg {
    color: ${props => props.color};
    font-size: 24px;
    background-color: #efefef;
    padding: 5px;
    border-radius: 8px;
  }
  .info{
    p{
        margin: 0;
        color: #292929;
        font-weight: 500;
        font-size: 17px;
    }
    span{
        color: gray;
        font-size: 14px;
    }
  }
`;

const Event = ({ name, date, svg, color }) => {
  return (
    <Ev color={color}>
      <div className="svg">{svg}</div>
      <div className="info">
        <p>{name}</p>
        <span dir="ltr">{date}</span>
      </div>
    </Ev>
  );
};

export default Event;
