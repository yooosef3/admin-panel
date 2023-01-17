import Map from "./Map";
import MonitorHeader from "./MonitorHeader";
import MonitorMusic from "./MonitorMusic";
import Navigator from "./Navigator";
import React from "react";
import styled from "styled-components";

const Monitor = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 20px 0;
  border-radius: 6px;
  background: rgb(0, 26, 52);
  background: linear-gradient(
    311deg,
    rgba(0, 26, 52, 1) 0%,
    rgba(66, 123, 150, 1) 100%
  );
  margin-top: 20px;
`;

const AutoMonitor = () => {
  return (
    <Monitor>
      <MonitorHeader />
      <Navigator />
      <Map />
      <MonitorMusic />
    </Monitor>
  );
};

export default AutoMonitor;
