import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Day = styled.div`
  background-color: #ffff;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  margin: 0 auto;
  flex-grow: 2;
  width: 90%;
  height: 380px;
  h3{
    margin: 0 0 60px 0;
  }
`;

class ConsumptionDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
            formatter: function (val) {
              return Number(val).toLocaleString() + "kw";
            },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        xaxis: {
          categories: [
            "شنبه",
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
          ],
          position: "bottom",
          labels: {
            offsetY: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs_: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: false,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return Number(val).toLocaleString();
            },
          },
        },
        chart: {
          animations: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: "میزان مصرف",
          data: [200, 400, 500, 300, 450],
        },
      ],
    };

    setTimeout(() => {
      this.setState({
        series: [
          {
            name: "میزان مصرف",
            data: [200, 400, 500, 300, 450],
          },
        ],
      });
    }, 4000);
  }

  render() {
    return (
      <Day>
        <h3>مصرف روزانه</h3>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="270"
          />
        </div>
      </Day>
    );
  }
}

export default ConsumptionDay;
