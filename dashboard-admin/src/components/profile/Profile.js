import React, { useContext } from "react";

import Footer from "../Footer";
import InfoSetting from "./InfoSetting";
import Navbar from "../navbar/Navbar";
import ProfProjects from "./ProfProjects";
import ProfileHeader from "./ProfileHeader";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Prof = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;
const Profile = () => {
  const { fixed } = useContext(fixedContext);

  return (
    <Prof fixed={fixed}>
      <Navbar route="پروفایل" />
      <ProfileHeader />
      <InfoSetting />
      <ProfProjects />
      <Footer />
    </Prof>
  );
};

export default Profile;
