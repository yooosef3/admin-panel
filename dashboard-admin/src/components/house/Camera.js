import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import kitchen from "../../assets/images/bg-smart-home-1.054a67d0.jpg";
import living from "../../assets/images/bg-smart-home-2.62753abf.jpg";
import { motion } from "framer-motion";
import room from "../../assets/images/home-decor-3.74d13fcb.jpg";
import styled from "styled-components";

const Cam = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px 15px 10px 15px;
  height: 100%;
  @media (min-width: 1200px){
    width: 60%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cameras {
      h3 {
        margin: 0;
      }
    }
    .options-filters {
      display: flex;
      align-items: center;
      gap: 15px;
      .filters {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: #ebebeb;
        border-radius: 6px;
        text-align: center;
        padding: 2px;
        @media (min-width: 768px) {
          flex-direction: row;
        }
        .house-filtering {
          transition: all 0.2s linear;
          margin: 0;
          width: 140px;
          cursor: pointer;
          height: 30px;
          font-weight: 500;
          border-radius: 6px;
        }
        .house-filtered {
          background-color: #ffff;
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        }
      }
    }
    .options-menu {
      position: relative;
      svg {
        font-size: 24px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          color: red;
        }
      }
      .options {
        position: absolute;
        display: ${(props) => (props.recDot ? "flex" : "none")};
        left: 0;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
        background-color: #ffff;
        border-radius: 6px;
        width: 120px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        z-index: 5;
        p {
          margin: 0;
          color: red;
          font-weight: 500;
          border-radius: 6px;
          padding: 2px 7px 2px;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            background-color: #ebebeb;
          }
        }
        a {
          color: #242135;
          font-weight: 400;
          border-radius: 6px;
          padding: 2px 7px 2px;
          transition: all 0.2s linear;
          &:hover {
            background-color: #ebebeb;
          }
        }
      }
    }
  }

  .house-images {
    margin-top: 30px;
    .kitchen {
      display: ${(props) => (props.house === "kitchen" ? "block" : "none")};
    }

    .living {
      display: ${(props) => (props.house === "living" ? "block" : "none")};
    }

    .room {
      display: ${(props) => (props.house === "room" ? "block" : "none")};
    }

    .house-record {
      position: relative;
      img {
        width: 100%;
        border-radius: 10px;
      }
      .house-overlay {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        .time {
          display: flex;
          align-items: center;
          gap: 15px;
          h4 {
            color: #ffff;
            margin: 0;
            font-size: 20px;
          }
        }
        .recording {
          display: flex;
          align-items: center;
          background-color: #ebebeb8b;
          border-radius: 8px;
          padding: 6px 0 0 6px;
          height: 16px;
          svg {
            color: red;
            font-size: 22px;
            padding: 0 0 5px;
          }
          h4 {
            margin: 0;
          }
        }
      }
    }
  }
`;
const Camera = () => {
  const [house, setHouse] = useState("kitchen");
  const [recDot, setRecDot] = useState(false);

  return (
    <Cam recDot={recDot} house={house}>
      <div className="header">
        <div className="cameras">
          <h3>دوربین ها</h3>
        </div>
        <div className="options-filters">
          <div className="filters">
            <h3
              className={`${
                house === "kitchen" && "house-filtered"
              } house-filtering`}
              onClick={() => setHouse("kitchen")}
            >
              آشپزخانه
            </h3>
            <h3
              className={`${
                house === "living" && "house-filtered"
              } house-filtering`}
              onClick={() => setHouse("living")}
            >
              پذیرایی
            </h3>
            <h3
              className={`${
                house === "room" && "house-filtered"
              } house-filtering`}
              onClick={() => setHouse("room")}
            >
              اتاق
            </h3>
          </div>
          <div className="options-menu">
            <BsThreeDotsVertical onClick={() => setRecDot(!recDot)} />
            <div className="options">
              <Link to="#">توقف</Link>
              <Link to="#">قطع فیلمبرداری</Link>
              <Link to="#">زمان بندی</Link>
              <p>حذف</p>
            </div>
          </div>
        </div>
      </div>
      <div className="house-images">
        <div className="house-record kitchen">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={kitchen}
            alt="kitchen"
          />
          <div className="house-overlay">
            <div className="time">
              <h4>01/08/20</h4>
              <h4>4:47PM</h4>
            </div>
            <div className="recording">
              <GoPrimitiveDot />
              <h4>RECORDING</h4>
            </div>
          </div>
        </div>
        <div className="house-record living">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={living}
            alt="living"
          />
          <div className="house-overlay">
            <div className="time">
              <h4>01/08/20</h4>
              <h4>4:55PM</h4>
            </div>
            <div className="recording">
              <GoPrimitiveDot />
              <h4>RECORDING</h4>
            </div>
          </div>
        </div>
        <div className="house-record room">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={room}
            alt="room"
          />
          <div className="house-overlay">
            <div className="time">
              <h4>01/08/20</h4>
              <h4>5:10PM</h4>
            </div>
            <div className="recording">
              <GoPrimitiveDot />
              <h4>RECORDING</h4>
            </div>
          </div>
        </div>
      </div>
    </Cam>
  );
};

export default Camera;
