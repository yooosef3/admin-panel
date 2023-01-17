import { AiFillBell } from "react-icons/ai";
import Event from "./Event";
import { FaBook } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const Even = styled.div`
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  background-color: #ffff;
  h3{
    margin: 0 0 20px 0;
  }
  .events{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const events = [
  {
    name: "هفته سایبری",
    date: "2 November 2022, at 12:30 PM",
    svg: <GiCyberEye />,
    color: '#1badce'
  },
  {
    name: " ملاقات با اکبر",
    date: "6 November 2022, at 10:00 PM",
    svg: <AiFillBell />,
    color: '#7928ca'
  },
  {
    name: " تالار امانات کتاب",
    date: "10 November 2022, at 9:30 AM",
    svg: <FaBook />,
    color: '#78b922'
  },
  {
    name: " قرارداد حمل و نقل انگلستان",
    date: "16 November 2022, at 2:00 PM",
    svg: <MdOutlineLocalShipping />,
    color: '#f53939'
  },
  {
    name: " پالت رنگ داشبورد را تأیید کنید",
    date: " 22 November 2022, at 9:00 AM",
    svg: <IoMdColorPalette />,
    color: '#ff667c'
  },
];

const Events = () => {
  return (
    <Even>
      <h3>وقایع بعدی</h3>
      <div className="events">
        {
            events.map(event => 
                <Event key={event.index} {...event}/>
            )
        }
      </div>
    </Even>
  );
};

export default Events;
