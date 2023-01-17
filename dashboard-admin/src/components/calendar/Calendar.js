import React, { useContext } from "react";

import CalendarEvents from "./CalendarEvents";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import TeamMember from "../dragDrop/TeamMember";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Cal = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Calendar = () => {
  const { fixed } = useContext(fixedContext);

  return (
    <Cal fixed={fixed}>
      <Navbar route={"تقویم رویدادها"} />
      <TeamMember />
      <CalendarEvents />
      <Footer />
    </Cal>
  );
};

export default Calendar;
