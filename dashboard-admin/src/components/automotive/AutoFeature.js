import { BsLightningChargeFill } from "react-icons/bs";
import React from "react";
import benz from "../../assets/images/mercedes-eqc.e8e836a8__1_-removebg-preview.png";
import styled from "styled-components";

const AutoF = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    310deg,
    rgb(98, 117, 148),
    rgb(168, 184, 216)
  );
  padding: 15px 25px;
  border-radius: 10px;
  margin-top: 120px;
  h1 {
    color: #ffff;
    font-size: 28px;
    border-bottom: 1px solid #b6b6b6;
    padding: 10px 0;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    img{
      position: absolute;
      top: -150px;
      left: 30%;
    }
  }

  .distance-energy {
    display: flex;
    justify-content: flex-start;
    gap: 70px;
    h3 {
      color: #d1d1d1;
      margin: 0;
    }
    h2{
        color: #ffff;
        margin: 0;
        font-size: 36px;
    }
    sup{
        margin-left: 4px;
        font-size: 18px;
    }
  }

  .automobile{
    display: flex;
    flex-direction: column;
    .available{
        display: flex;
        align-items: center;
        gap: 15px;
        @media (min-width: 768px) {
            margin: 0 auto;
        }
        @media (min-width: 992px){
          position: absolute;
          bottom: 15px;
          left: 45%;
        }
        p{
            color: #d1d1d1;
            font-size: 26px;
            font-weight: 600;
            margin: 0;
        }
        h2{
            font-size: 38px;
            color: #ffff;
            font-weight: 600;
            margin: 0;
            sup{
                font-size: 16px;
            }
        }
    }
  }

  .charger-station{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
    .station{
        h3{
            margin: 0;
            color: #ffff;
        }
    }
    svg{
        color: #ffff;
        border: 1px solid #ffff;
        border-radius: 50%;
        padding: 8px;
        background-color: #dcdcdc3e;
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
            background-color: #b3b3b3ba;
        }
    }
  }
`;

const AutoFeature = () => {
  

  
  return (
    <AutoF>
      <div className="last-charge">
        <h1>از آخرین شارژ</h1>
        <div className="distance-energy">
          <div className="distance">
            <h3>فاصله</h3>
            <h2>145<sup>km</sup></h2>
          </div>
          <div className="energy">
            <h3>میانگین انرژی</h3>
            <h2>300<sup>kw</sup></h2>
          </div>
        </div>
      </div>
      <div className="automobile">
        <img alt="benz" src={benz} />
        <div className="available">
          <p>میزان شارژ</p>
          <h2>70<sup>%</sup></h2>
        </div>
      </div>
      <div className="charger">
        <h1>نزدیک ترین شارژر</h1>
        <div className="charger-station">
          <div className="station">
            <h3>Miclan, DW</h3>
            <h3>کیلومتر 40 جاده تهران-کرج</h3>
          </div>
          <BsLightningChargeFill />
        </div>
      </div>
    </AutoF>
  );
};

export default AutoFeature;
