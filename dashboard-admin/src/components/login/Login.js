import React, { useContext } from "react";

import Footer from "../Footer";
import Image from "./Image";
import LoginForm from "./LoginForm";
import Navbar from "../navbar/Navbar";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Log = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
    .login-img{
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Login = () => {
  const { fixed } = useContext(fixedContext);

  return (
    <Log fixed={fixed}>
      <Navbar route="ورود" />
      <div className="login-img">
        <Image />
        <LoginForm />
      </div>
      <Footer />
    </Log>
  );
};

export default Login;
