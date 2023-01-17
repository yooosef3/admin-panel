import React from "react";
import login from "../../assets/images/curved9.ec7010fa.jpg";
import styled from "styled-components";

const Img = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
  img {
    -webkit-clip-path: polygon(20% 0%, 99.5% 0, 99.5% 100%, 0% 100%);
    clip-path: polygon(20% 0%, 99.5% 0, 99.5% 100%, 0% 100%);
  }
`;

const Image = () => {
  return (
    <Img>
      <img alt="login" src={login} />
    </Img>
  );
};

export default Image;
