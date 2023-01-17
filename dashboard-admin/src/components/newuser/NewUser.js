import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AboutForm from "./AboutForm";
import AddressForm from "./AddressForm";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import UserSteps from "./UserSteps";
import { fixedContext } from "../../App";
import styled from "styled-components";

const User = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const NewUser = () => {
  const { fixed } = useContext(fixedContext);
  const location = useLocation();
  const pathname = location.pathname;



  return (
    <User fixed={fixed}>
      <Navbar route="کاربر جدید" />
      <UserSteps path={pathname}/>
      <Routes>
        <Route path="aboutform" element={<AboutForm />} />
        <Route path="addressform" element={<AddressForm />} />
        <Route path="socialform" element={<SocialForm />} />
        <Route path="profileform" element={<ProfileForm />} />
        <Route path="/" element={<AboutForm />} />
      </Routes>
      <Footer />
    </User>
  );
};

export default NewUser;
