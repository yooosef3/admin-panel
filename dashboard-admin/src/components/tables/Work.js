import Loader from "../shared/Loader";
import ProjectTable from "./ProjectTable";
import React from "react";
import { WORKS } from "../../graphql/querries";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Wor = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  overflow-x: auto;
  margin: 22px auto;
  table {
    width: 1165px;
    border-collapse: collapse;
    caption {
      text-align: right;
    }
    thead {
        height: 40px;
      th {
        color: gray;
        text-align: right;
      }
    }
  }
`;

const Work = () => {
  const { loading, data, error } = useQuery(WORKS);
  return (
    <Wor>
      <table>
        <caption>
          <h3>پروژه ها</h3>
        </caption>
        <thead>
          <tr>
            <th>پروژه</th>
            <th> بودجه</th>
            <th>وضعیت</th>
            <th> پیشروی</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : error ? (
          <h4 style={{ color: "red" }}>
            خطای شبکه رخ داده است, بعدا امتحان کنید
          </h4>
        ) : (
          data.works.map((work) => <ProjectTable key={work.id} {...work} />)
        )}
      </table>
    </Wor>
  );
};

export default Work;
