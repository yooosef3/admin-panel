import React from "react";
import { WeatherIcons } from "./Climate";
import humidity from "../../../assets/weather/humidity.svg";
import pressure from "../../../assets/weather/pressure.svg";
import styled from "styled-components";
import sunrise from "../../../assets/weather/sunrise.svg";
import sunset from "../../../assets/weather/sunset.svg";
import wind from "../../../assets/weather/windsock.svg";

export const WeatherInfoIcons = {
  sunset: sunset,
  sunrise: sunrise,
  humidity: humidity,
  wind: wind,
  pressure: pressure,
};
const Location = styled.span`
  margin: 0 0 -45px 0;
  text-transform: capitalize;
  font-size: 22px !important;
  font-weight: 600;
  color: #ffff;
`;
const Condition = styled.span`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
  & span {
    font-size: 34px;
    font-weight: 600;
    color: #ffff;
    direction: ltr;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  color: #344767;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  background-image: linear-gradient(
    310deg,
    rgb(33, 82, 255),
    rgb(33, 212, 253)
  );
  border-radius: 6px;
  width: 90%;
  padding: 0 10px 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .city-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      color: wheat;
      margin: -8px 0 0 0;
      font-size: 22px;
    }
  }
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  background-color: #ffff;
  width: 33%;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  flex-grow: 1;
`;
const InfoIcon = styled.img`
  width: 50px;
  height: 50px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  margin: 15px;
  color: #3069b4;
  font-weight: 600;
  & span {
    font-size: 12px;
    text-transform: capitalize;
    margin: 0;
    &:first-of-type{
        font-weight: 800;
        font-size: 18px;
        direction: ltr;
    }
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        <span>{value}</span>
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        </Condition>
        <div className="city-icon">
          <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
          <p>{`${weather?.weather[0].description}`}</p>
        </div>
      </WeatherContainer>

      <WeatherInfoLabel>اطلاعات آب و هوا</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
