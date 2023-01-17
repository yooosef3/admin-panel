import React, { Component } from "react";

import { BsArrowUpShort } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const Ch = styled.div`
  background-color: rgb(52, 71, 103);
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  h3 {
    margin: 0 0 15px 0;
    color: #ffff;
  }
  div {
    display: flex;
    align-items: flex-start;
    svg {
      font-size: 24px;
      font-weight: 600;
      color: green;
    }
    h5 {
      margin: 0 4px;
      font-size: 18px;
      color: #ffff;
    }
    span {
      color: #ffff;
    }
  }

  
`;

const data = {
  labels: ["1395", "1396", "1397", "1398", "1399", "1400", "1401"],
  datasets: [
    {
      label: "پیشرفت سالانه",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 65, 80, 85],
    },
  ],
};

class Productivity extends Component {
  render() {
    return (
      <Ch>
        <h3>پیشرفت</h3>
        <div>
          <BsArrowUpShort />
          <h5>4%</h5>
          <span>در سال 1401</span>
        </div>
        <Line ref="chart" data={data} />
      </Ch>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}

export default Productivity;
