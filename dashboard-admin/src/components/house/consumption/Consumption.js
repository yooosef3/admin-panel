import ConsumptionChart from "./ConsumptionChart";
import ConsumptionDay from "./ConsumptionDay";
import React from "react";
import RoundSlider from "./device/round/RoundSlider";
import styled from "styled-components";

const Cons = styled.div`
  margin-top:20px ;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1400px) {
    flex-wrap: nowrap;
  }
`;
const Consumption = () => {
  return (
    <Cons>
      <ConsumptionChart />
      <ConsumptionDay />
      <RoundSlider />
    </Cons>
  );
};

export default Consumption;
