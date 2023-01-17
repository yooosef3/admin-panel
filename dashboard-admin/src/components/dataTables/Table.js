import "rc-pagination/assets/index.css";
import '../../styles/data.scss'

import Pagination from "rc-pagination";
import React from "react";
import { allData } from "./Constants";
import cloneDeep from "lodash/cloneDeep";
import styled from "styled-components";
import throttle from "lodash/throttle";

const DataTable = styled.div`
  overflow: auto;
  background-color: #ffff;
  padding: 15px;
  margin-top: 40px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
`;

const tableHead = {
  name: "نام",
  parentId: "شغل",
  campaignType: "شرکت",
  status: "سن",
  channel: "تاریخ استخدام",
  action: "درآمد",
};

const Table = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <DataTable>
      <div className="table-container">
        <h3>جدول داده ها</h3>
        <div className="data-search">
          <input
            placeholder="جستجو..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <table className="data-table">
          <thead>
            <tr>{headRow()}</tr>
          </thead>
          <tbody className="trhover">{tableData()}</tbody>
        </table>
        <Pagination
          pageSize={countPerPage}
          onChange={updatePage}
          current={currentPage}
          total={allData.length}
        />
      </div>
    </DataTable>
  );
};
export default Table;
