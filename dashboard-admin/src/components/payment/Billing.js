import Factors from "./Factors";
import Master from "./Master";
import React from "react";
import styled from "styled-components";

const Bill = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 992px) {
      flex-direction: row;
    }
`
const Billing = () => {
  return (
    <Bill>
      <Master />
      <Factors />
    </Bill>
  );
};

export default Billing;
