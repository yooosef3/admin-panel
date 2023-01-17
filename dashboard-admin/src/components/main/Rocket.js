import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import rocket from "../../assets/images/rocket-white.webp";
import styled from "styled-components";
import work from "../../assets/images/ivancik.jpg";

const Rock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  .rocket {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 6px;
    padding: 15px;
    background-color: #ffff;
    gap: 15px;
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
    }
  }
  .build-developers {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      margin: 0;
      color: gray;
    }
    h3 {
      margin: 0;
    }
    p {
      color: gray;
    }
    @media (min-width: 992px) {
      width: 55%;
    }
  }
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    color: gray;
    svg {
      transition: all 0.2s linear;
    }
    &:hover svg {
      transform: translateX(-50%);
      color: green;
    }
  }
  .rocket-img {
    background-image: linear-gradient(310deg, #7928ca, #ff0080);
    border-radius: 6px;
    padding-top: 8%;
    img {
      width: 100%;
    }
    @media (min-width: 992px) {
      width: 40%;
    }
  }

  .work {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 6px;
    overflow: hidden;
    height: 220px;
    @media (min-width: 992px) {
      width: 50%;
      height: 273px;
    }
    img {
      width: 100%;
    }
    .work-overlay {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 88%;
      padding: 15px 15px 10px 15px;
      background-color: #00000071;
      p {
        color: #ffff;
        margin-bottom: 40px;
      }
      h3 {
        color: #ffff;
      }
      @media (min-width:992px) {
        height: 247px;
      }
    }
  }
`;
const Rocket = () => {
  return (
    <Rock>
      <div className="rocket">
        <div className="build-developers">
          <div className="content">
            <h4>ساخته شده توسط توسعه دهندگان</h4>
            <h3>داشبورد رابط کاربری</h3>
            <p>
              از رنگ ها، کارت ها، تایپوگرافی گرفته تا عناصر پیچیده، اسناد کامل
              را خواهید یافت.
            </p>
          </div>
          <Link to="#">
            <span>مطالعه بیشتر</span>
            <HiArrowNarrowLeft />
          </Link>
        </div>
        <div className="rocket-img">
          <img alt="rocket" src={rocket} />
        </div>
      </div>
      <div className="work">
        <img alt="work" src={work} />
        <div className="work-overlay">
          <div className="content">
            <h3> کار با راکت </h3>
            <p>
              خلق ثروت یک بازی با جمع مثبت تکاملی اخیر است. همه چیز به این بستگی
              دارد که چه کسی اول از فرصت استفاده می کند.
            </p>
          </div>
          <Link to="#">
            <span>مطالعه بیشتر</span>
            <HiArrowNarrowLeft />
          </Link>
        </div>
      </div>
    </Rock>
  );
};

export default Rocket;
