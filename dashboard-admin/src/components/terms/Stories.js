import React from "react";
import Story from "./Story";
import akbar from "../../assets/images/team-2.jpg";
import ali from "../../assets/images/ivancik.442b4747.jpg";
import asal from "../../assets/images/team-5.bba518ed.jpg";
import mary from "../../assets/images/ivana-squares.123e41b2.jpg";
import nader from "../../assets/images/team-3.jpg";
import narges from "../../assets/images/marie.1c682842.jpg";
import naz from "../../assets/images/kal-visuals-square.22829a59.jpg";
import neda from "../../assets/images/ivana-square.b04026bd.jpg";
import shayan from "../../assets/images/team-4.jpg";
import styled from "styled-components";
import yusef from "../../assets/images/bruce-mars.45f64779.jpg";
import zahra from "../../assets/images/team-1.jpg";

const followers = [
  {
    id: 1,
    image: yusef,
    name: "یوسف خدری",
  },
  {
    id: 2,
    image: shayan,
    name: "شایان عباسی",
  },
  {
    id: 3,
    image: neda,
    name: "ندا آقاسلطان",
  },
  {
    id: 4,
    image: akbar,
    name: "اکبر مرادی",
  },
  {
    id: 5,
    image: nader,
    name: "نادر محمدی",
  },
  {
    id: 6,
    image: mary,
    name: "مریم راد",
  },
  {
    id: 7,
    image: zahra,
    name: "زهرا رضوی",
  },
  {
    id: 8,
    image: asal,
    name: "عسل صادقی",
  },
  {
    id: 9,
    image: ali,
    name: "علی کریمی",
  },
  {
    id: 10,
    image: narges,
    name: "نرگس علیدوست",
  },
  {
    id: 11,
    image: naz,
    name: "نازنین بنیادی",
  },
];
const Stori = styled.div`
  display: flex;
  gap: 35px;
  background-color: #ffff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  overflow-y: auto;
  margin-top: 200px;
  @media (min-width: 640px) {
    margin-top: 120px;
  }
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  .add-story {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5{
        margin:15px 0 0;
        text-align: center;
    }
      .story {
        text-align: center;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-image: linear-gradient(
          310deg,
          rgb(33, 82, 255),
          rgb(33, 212, 253)
        );
      h1 {
        font-size: 40px;
        color: #ffff;
        margin: 0;
      }
    }
  }
`;
const Stories = () => {
  return (
    <Stori>
      {followers.map((follower) => (
        <Story key={follower.id} {...follower} />
      ))}
      <div className="add-story">
        <div className="story">
          <h1>+</h1>
        </div>
        <h5>   استوری بذار</h5>
      </div>
    </Stori>
  );
};

export default Stories;
