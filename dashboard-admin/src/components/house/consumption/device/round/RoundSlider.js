import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import styled from "styled-components";

const Rou = styled.div`
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  background-color: #ffff;
  padding: 15px;
  margin: 0 auto;
  width: 90%;
  flex-grow: 1;
  height: 380px;
  h3{
    margin: 0 0 20px 0;
  }
  .limit {
    display: flex;
    justify-content: start;
    gap: 50px;
    margin-right: 45px;
    span {
      font-weight: 600;
      color: #576d88;
    }
  }
`;

const RoundSlider = () => {
  return (
    <Rou>
      <h3>محدوده دستگاه</h3>
      <CircularSlider
        label="دما"
        labelColor="#005a58"
        knobColor="#005a58"
        progressColorFrom="#00bfbd"
        progressColorTo="#009c9a"
        progressSize={8}
        trackColor="#eeeeee"
        trackSize={5}
        data={[
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
        ]}
        dataIndex={14}
        onChange={(value) => {
          console.log(value);
        }}
      />
      <div className="limit">
        <span>&#176; 12C</span>
        <span>دما</span>
        <span>&#176; 28C</span>
      </div>
    </Rou>
  );
};

export default RoundSlider;
