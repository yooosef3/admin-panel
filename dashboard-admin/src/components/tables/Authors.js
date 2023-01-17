import { AUTHORS } from "../../graphql/querries";
import Loader from "../shared/Loader";
import React from "react";
import TableAuthor from "./TableAuthor";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Auth = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  margin: 22px auto;
  overflow-x: auto;
  table {
    width: 1165px;
    border-collapse: collapse;
    caption {
      text-align: right;
    }
    th {
      color: gray;
      text-align: right;
    }
  }
`;
const Authors = () => {
  const { loading, data, error } = useQuery(AUTHORS);

  return (
    <Auth>
      <table>
        <caption>
          <h3>نویسندگان</h3>
        </caption>
        <tr>
          <th>نویسنده</th>
          <th>عنوان شغلی</th>
          <th>وضعیت</th>
          <th>تاریخ استخدام</th>
        </tr>
        {loading ? (
          <Loader />
        ) : error ? (
          <h4 style={{ color: "red" }}>
            خطای شبکه رخ داده است, بعدا امتحان کنید
          </h4>
        ) : (
          data.authors.map((author) => (
            <TableAuthor key={author.id} {...author} />
          ))
        )}
      </table>
    </Auth>
  );
};

export default Authors;
