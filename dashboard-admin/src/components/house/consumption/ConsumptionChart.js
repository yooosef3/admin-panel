import DonutChart from "react-donut-chart";
import React from "react";
import styled from "styled-components";

const reactDonutChartdata = [
  {
    label: "پذیرایی",
    value: 15,
    color: "#7928ca",
  },
  {
    label: "آشپزخانه",
    value: 20,
    color: "#627594",
  },
  {
    label: "اتاق",
    value: 13,
    color: "#2152ff",
  },
  {
    label: "پارکینگ",
    value: 32,
    color: "#82d616",
  },
  {
    label: "زیر زمین",
    value: 20,
    color: "#fba833",
  },
];
const reactDonutChartBackgroundColor = [
  "#7928ca",
  "#627594",
  "#2152ff",
  "#82d616",
  "#fba833",
];
const reactDonutChartInnerRadius = 0.6;
const reactDonutChartSelectedOffset = 0.0;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};
const Con = styled.div`
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  background-color: #ffff;
  margin: 0 auto;
  width: 90%;
  overflow-y: hidden;
  flex-grow: 1;
  height: 380px;
  border-radius: 6px;
  padding: 15px;
  @media (min-width: 460px) {
    overflow-x: hidden;
  }
  h3 {
    margin: 0 0 60px 0;
  }
  .chart {
    direction: ltr;
  }
`;
const ConsumptionChart = () => {
  return (
    <Con>
      <h3>میزان مصرف بخش های مختلف خانه</h3>
      <DonutChart
        width={375}
        className="chart"
        height={270}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        selectedOffset={reactDonutChartSelectedOffset}
      />
    </Con>
  );
};

export default ConsumptionChart;
