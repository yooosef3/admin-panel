import React, { useContext } from "react";

import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import SignupForm from "./SignupForm";
import SignupHeader from "./SignupHeader";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Sign = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const SignUp = () => {
    const { fixed} = useContext(fixedContext);
  return (
    <Sign fixed={fixed}>
      <Navbar route={"ثبت نام"} />
      <SignupHeader />
      <SignupForm />
      <Footer />
    </Sign>
  );
};

export default SignUp;
