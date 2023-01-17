import React, { useContext } from "react";

import AutoFeature from "./AutoFeature";
import AutoMonitor from "./AutoMonitor";
import AutomobileInfo from "./AutomobileInfo";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Auto = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;
const Automotive = () => {
  const { fixed } = useContext(fixedContext);

  return (
    <Auto fixed={fixed} >
      <Navbar route={"خودرو"} />
      <AutoFeature />
      <AutomobileInfo />
      <AutoMonitor />
      <Footer />
    </Auto>
  );
};

export default Automotive;
