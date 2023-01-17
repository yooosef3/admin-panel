import React, { useState } from "react";

import Axios from "axios";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherInfoComponent";
import cloudy from "../../../assets/weather/cloudy.svg";
import night from "../../../assets/weather/clear-night.svg";
import rain from "../../../assets/weather/rain.svg";
import storm from "../../../assets/weather/wind.svg";
import styled from "styled-components";
import sunny from "../../../assets/weather/clear-day.svg";

export const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": sunny,
  "02n": cloudy,
  "03d": cloudy,
  "03n": cloudy,
  "04d": sunny,
  "04n": cloudy,
  "09d": rain,
  "09n": rain,
  "10d": rain,
  "10n": rain,
  "11d": storm,
  "11n": storm,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 15px;
  margin: auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  background: #ffff;
  @media (min-width: 1200px) {
    width: 40%;
    height: 445px;
  }
`;

const AppLabel = styled.span`
  color: #344767;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const Climate = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>آب و هوای امروز</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default Climate;
