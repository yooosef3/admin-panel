import Activity from "./Activity";
import ReactEChart from "echarts-for-react";
import styled from "styled-components";

const Sales = styled.div`
  display: flex;
  flex-direction: column;
  width: 295px;
  margin: 0 auto;
  height: 100%;
  padding: 15px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  background-color: #ffff;
  @media (min-width: 450px) {
    width: 365px;
  }
  @media (min-width: 640px) {
    width: 96%;
  }
  @media (min-width: 992px) {
    height: 81vh;
  }

  .react-echart {
    width: 100%;
    height: 300px;
    background-image: linear-gradient(310deg, #141727, #3a416f);
    border-radius: 6px;
    @media (min-width: 992px) {
      height: 390px !important;
    }
  }

  h3 {
    margin: 0;
  }

  .percentage {
    span {
      &:first-of-type {
        color: green;
        font-weight: 600;
      }
      &:last-of-type {
        color: gray;
      }
    }
  }
`;
const ActiveChart = () => {
  const eChartsOption = {
    xAxis: {
      // name of X Axis
      name: "ماه",
      type: "category",
      // Contains the values for XAxis
      data: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    },
    yAxis: [
      {
        // name of Y Axis
        name: "مقدار فروش",
        type: "value",
      },
    ],
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {},
      },
    },

    series: [
      {
        data: [101, 200, 300, 400, 450, 650],
        type: "bar",
        stack: "total",
      },
      {
        data: [93, 30, 100, 230, 104, 60],
        type: "bar",
        stack: "total",
      },
    ],
  };
  return (
    <Sales>
      <h3>کاربران فعال</h3>
      <div className="percentage">
        <span>(25%+) </span>
        <span>نسبت به هفته قبل</span>
      </div>
      <ReactEChart className="react-echart" option={eChartsOption} />
      <Activity />
    </Sales>
  );
};

export default ActiveChart;
