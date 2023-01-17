import Message from "./Message";
import React from "react";
import akbar from "../../assets/images/team-3.jpg";
import ali from "../../assets/images/team-2.jpg";
import arash from "../../assets/images/team-4.jpg";
import elnaz from "../../assets/images/ivana-square.b04026bd.jpg";
import nader from "../../assets/images/team-17-370x334.jpg";
import nazi from "../../assets/images/ivana-squares.123e41b2.jpg";
import selena from "../../assets/images/kal-visuals-square.22829a59.jpg";
import shadi from "../../assets/images/team-5.bba518ed.jpg";
import shiva from "../../assets/images/team-1.jpg";
import sima from "../../assets/images/marie.1c682842.jpg";
import soni from "../../assets/images/user-2-119x119.jpg";
import styled from "styled-components";
import yusef from "../../assets/images/bruce-mars.45f64779.jpg";

const messages = [
  { id: 1, name: "اکبر", image: akbar, message: "باشه اوکیه" },
  { id: 2, name: "علی", image: ali, message: "بابا دکتر مملکت چشمم روشن" },
  { id: 3, name: "آرش", image: arash, message: "سلام کجایی؟" },
  { id: 4, name: "الناز", image: elnaz, message: "اره اون بالاس" },
  { id: 5, name: "نادر", image: nader, message: "ممنون از همکاری شما!" },
  {
    id: 6,
    name: "نازی",
    image: nazi,
    message: "ن امروز رو بیخیال شو, ابشالا فردا",
  },
  { id: 7, name: "شادی", image: shadi, message: "ولمون کن حاجی ناموسا" },
  { id: 8, name: "شیوا", image: shiva, message: "باشه حالا خدا بزرگه تا فردا" },
  { id: 9, name: "سیما", image: sima, message: "آها درسته" },
  { id: 10, name: "سونی", image: soni, message: "امروز حالش بد بود نتونست بیاد" },
  { id: 11, name: "یوسف", image: yusef, message: "مبارک باشه داداش" },
  { id: 12, name: "سلنا", image: selena, message: "خیلی جالب بود" },
];
const Messag = styled.div`
  background-color: #ffff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  h3 {
    margin: 0 0 20px 0;
  }
  .messages {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 992px) {
      flex-direction: row;
      gap: 40px;
    }
    .message {
      display: flex;
      flex-direction: column;
      gap: 15px;
      @media (min-width: 992px) {
        width: 50%;
      }
    }
  }
`;

const Messages = () => {
  return (
    <Messag>
      <h3>مکالمات</h3>
      <div className="messages">
        <div className="message">
          {messages.slice(0, 6).map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
        <div className="message">
          {messages.slice(6).map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
      </div>
    </Messag>
  );
};

export default Messages;
