import React from "react";
import styled from "styled-components";
import welcome from "../../../assets/weather/thunderstorms-day-snow.svg";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: #b0b0b0 solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    &::placeholder {
      font-size: 18px;
      color: #b0b0b0;
    }
  }
  & button {
    background-image: linear-gradient(
      310deg,
      rgb(33, 82, 255),
      rgb(33, 212, 253)
    );
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
    &:hover {
      background-image: linear-gradient(
        310deg,
        rgb(27, 66, 209),
        rgb(26, 165, 196)
      );
    }
  }
`;
const ChooseCityLabel = styled.span`
  color: #344767;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={welcome} />
      <ChooseCityLabel>نام شهر خود را وارد کنید</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="شهــــــر"
        />
        <button type={"submit"}>جستجـو</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
