import React, { useContext } from "react";

import Charts from "./charts/Charts";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import ProjectReview from "./projects/ProjectReview";
import Rocket from "./Rocket";
import Stats from "./Stats";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Dash = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Dashboard = () => {
  const { fixed } = useContext(fixedContext);
  return (
    <Dash fixed={fixed}>
      <Navbar route={"داشبورد"} />
      <Stats />
      <Rocket />
      <Charts />
      <ProjectReview />
      <Footer />
    </Dash>
  );
};

export default Dashboard;
