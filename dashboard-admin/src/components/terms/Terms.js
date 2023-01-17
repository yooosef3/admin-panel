import React, { useContext } from "react";

import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import Page from "./Page";
import ProfileHeader from "../profile/ProfileHeader";
import Stories from "./Stories";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Term = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Terms = () => {
  const { fixed } = useContext(fixedContext);
  return (
    <Term fixed={fixed}>
      <Navbar route=" اینستاگرام" />
      <ProfileHeader />
      <Stories />
      <Page />
      <Footer />
    </Term>
  );
};

export default Terms;
