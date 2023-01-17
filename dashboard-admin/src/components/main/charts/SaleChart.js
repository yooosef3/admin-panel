/*
eCharts examples -> https://ecomfe.github.io/echarts-examples/public/index.html
*/

import * as React from "react";

import ReactEcharts from "echarts-for-react";

//Import json file. Used in {options}.
const data = require("./data");

//Array of names for legend in {options}
const dataNames = data.map(i => i.name);

//Chart style
const style = {
  height: "73vh",
  width: "100%"
};

//Chart options
let option = {
  backgroundColor: "rgb(43, 51, 59)",
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true
      },
      magicType: {
        show: true,
        type: ["pie", "funnel"]
      },
      restore: {
        show: true,
        title: "Restore"
      },
      saveAsImage: {
        show: true,
        title: "Save Image"
      }
    }
  },
  graphic: [
    {
      type: "group",
      rotation: Math.PI / 4,
      bounding: "raw",
      right: 200,
      bottom: 100,
      z: 100,
      children: [
        {
          type: "rect",
          left: "center",
          top: "center",
          z: 100,
          shape: {
            width: 600,
            height: 50
          },
          style: {
            fill: "#00000000"
          }
        },
        {
          type: "text",
          left: "center",
          top: "center",
          z: 100,
        }
      ]
    },
    {
      type: "group",
      left: "0",
      top: "bottom",
      children: [
        {
          type: "rect",
          z: 100,
          left: "center",
          top: "middle",
          shape: {
            width: 150,
            height: 50
          },
          style: {
            fill: "#00000000",
            stroke: "#00000000",
          }
        },
      ]
    }
  ],
  tooltip: {
    trigger: "item",
    formatter: "{a}<br/><strong>{b}</strong>: {c}"
  },
  calculable: true,
  legend: {
    icon: "circle",
    x: "center",
    y: "50px",
    data: dataNames,
    textStyle: {
      color: "#fff"
    }
  },
  series: [
    {
      name: "مقدار فروش",
      type: "pie",
      animationDuration: 2000,
      animationEasing: "quarticInOut",
      radius: [10, 150],
      avoidLabelOverlap: false,
      startAngle: 90,
      hoverOffset: 5,
      center: ["50%", "50%"],
      roseType: "area",
      selectedMode: "multiple",
      label: {
        normal: {
          show: true,
          formatter: "{c}" // {c} data: [{value:},]
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          smooth: false,
          length: 20,
          length2: 10
        },
        emphasis: {
          show: true
        }
      },
      data: data
    }
  ]
};

const SaleChart = () => (
  <ReactEcharts option={option} style={style} className="pie-chart" />
);

export default SaleChart;