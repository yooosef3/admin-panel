import React, { useContext } from "react";

import DragableSections from "./DragableSections";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import TeamMember from "./TeamMember";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Drag = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const DragDrop = () => {
  const { fixed } = useContext(fixedContext);

  return <Drag fixed={fixed}>
            <Navbar route='چیدمان'/>
            <TeamMember />
            <DragableSections />
            <Footer />
         </Drag>;
};

export default DragDrop;
