import React, { useContext } from "react";

import CamClimate from "./CamClimate";
import Consumption from "./consumption/Consumption";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import Situations from "./situation/Situations";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Hous = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const House = () => {
  const { fixed } = useContext(fixedContext);
  return (
    <Hous fixed={fixed}>
      <Navbar route="خانه هوشمند" />
      <CamClimate />
      <Consumption />
      <hr />
      <Situations />
      <Footer />
    </Hous>
  );
};

export default House;
