import React, { useContext } from "react";

import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import Table from "./Table";
import { fixedContext } from "../../App";
import styled from "styled-components";

const Data = styled.div`
  margin: 0 auto;
  padding-top: ${(props) => (props.fixed ? "170px" : "0px")};
  @media (min-width: 992px) {
    padding-top: ${(props) => (props.fixed ? "100px" : "0px")};
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const DataTables = () => {
  const { fixed } = useContext(fixedContext);
  return (
    <Data fixed={fixed}>
      <Navbar route={"جدول داده ها"} />
      <Table />
      <Footer />
    </Data>
  );
};

export default DataTables;
