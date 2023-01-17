import React from "react";
import Situation from './Situation';
import air from "../../../assets/weather/wind.svg";
import humidity from "../../../assets/weather/humidity.svg";
import light from "../../../assets/weather/clear-day.svg";
import pressure from "../../../assets/weather/pressure.svg";
import styled from "styled-components";
import temperature from "../../../assets/weather/temp.svg";
import wifi from "../../../assets/images/1289346.svg";

const Situ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const data = [
  {
    id: 1,
    img: humidity,
    situation: "رطوبت",
  },
  {
    id: 2,
    img: temperature,
    situation: "دما",
  },
  {
    id: 3,
    img: air,
    situation: "کولر",
  },
  {
    id: 4,
    img: light,
    situation: "روشنایی",
  },
  {
    id: 5,
    img: wifi,
    situation: "وای فای",
  },
  {
    id: 6,
    img: pressure,
    situation: "فشار",
  },
];

const Situations = () => {
  return (
    <Situ>
    {
        data.map(item => 
            <Situation key={item.id} situation={item.situation} icon={item.img}/>
        )
    }
    </Situ>
  );
};

export default Situations;
