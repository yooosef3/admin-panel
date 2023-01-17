import React, { useContext, useState } from "react";
import {
  navbarContext,
  sidebarColorsContext,
  sidebarTypeContext,
} from "../App";

import { AiFillDatabase } from "react-icons/ai";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsKanbanFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RiTableAltFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import sidebarLogo from "../assets/images/dashboard.png";
import styled from "styled-components";

const SideBarDiv = styled.div`
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #344767;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #52126d;
  }
  top: 4px;
  z-index: 20;
  right: ${(props) => (props.menu ? "15px" : "-300px")};
  bottom: 15px;
  transition: all 0.3s linear;
  border-radius: 10px;
  background-color: ${(props) => (props.sideType ? "#ffff" : "#f4b0f4")};
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 20px;
  position: fixed;
  overflow-y: auto;
  @media (min-width: 1200px) {
    height: 95vh;
    position: sticky;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }

  header {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c5c5c5;

    img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }

    svg {
      margin-right: auto;
      color: grey;
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        color: red;
        transform: scale(1.1);
      }
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  .dashboard-options,
  .dashboard-account {
    padding: 15px 0 0;

    a {
      display: flex;
      align-items: center;
      padding-right: 10px;
      border-radius: 6px;
      cursor: pointer;
      &:nth-of-type(1) {
        background-color: ${(props) => props.options.dashboard && "#344767"};
        h3 {
          color: ${(props) => props.options.dashboard && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.dashboard && "#ffff"};
          color: ${(props) => props.options.dashboard && "#344767"};
        }
      }
      &:nth-of-type(2) {
        background-color: ${(props) => props.options.tables && "#344767"};
        h3 {
          color: ${(props) => props.options.tables && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.tables && "#ffff"};
          color: ${(props) => props.options.tables && "#344767"};
        }
      }
      &:nth-of-type(3) {
        background-color: ${(props) => props.options.pay && "#344767"};
        h3 {
          color: ${(props) => props.options.pay && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.pay && "#ffff"};
          color: ${(props) => props.options.pay && "#344767"};
        }
      }
      &:nth-of-type(4) {
        background-color: ${(props) => props.options.automobile && "#344767"};
        h3 {
          color: ${(props) => props.options.automobile && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.automobile && "#ffff"};
          color: ${(props) => props.options.automobile && "#344767"};
        }
      }
      &:nth-of-type(5) {
        background-color: ${(props) => props.options.house && "#344767"};
        h3 {
          color: ${(props) => props.options.house && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.house && "#ffff"};
          color: ${(props) => props.options.house && "#344767"};
        }
      }
      &:nth-of-type(6) {
        background-color: ${(props) => props.options.drag && "#344767"};
        h3 {
          color: ${(props) => props.options.drag && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.drag && "#ffff"};
          color: ${(props) => props.options.drag && "#344767"};
        }
      }
      &:nth-of-type(7) {
        background-color: ${(props) => props.options.data && "#344767"};
        h3 {
          color: ${(props) => props.options.data && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.data && "#ffff"};
          color: ${(props) => props.options.data && "#344767"};
        }
      }
      &:nth-of-type(8) {
        background-color: ${(props) => props.options.calendar && "#344767"};
        h3 {
          color: ${(props) => props.options.calendar && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.calendar && "#ffff"};
          color: ${(props) => props.options.calendar && "#344767"};
        }
      }
      &:nth-of-type(9) {
        background-color: ${(props) => props.options.profile && "#344767"};
        h3 {
          color: ${(props) => props.options.profile && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.profile && "#ffff"};
          color: ${(props) => props.options.profile && "#344767"};
        }
      }
      &:nth-of-type(10) {
        background-color: ${(props) => props.options.terms && "#344767"};
        h3 {
          color: ${(props) => props.options.terms && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.terms && "#ffff"};
          color: ${(props) => props.options.terms && "#344767"};
        }
      }
      &:nth-of-type(11) {
        background-color: ${(props) => props.options.user && "#344767"};
        h3 {
          color: ${(props) => props.options.user && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.user && "#ffff"};
          color: ${(props) => props.options.user && "#344767"};
        }
      }
      &:nth-of-type(12) {
        background-color: ${(props) => props.options.signup && "#344767"};
        h3 {
          color: ${(props) => props.options.signup && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.signup && "#ffff"};
          color: ${(props) => props.options.signup && "#344767"};
        }
      }
      &:nth-of-type(13) {
        background-color: ${(props) => props.options.login && "#344767"};
        h3 {
          color: ${(props) => props.options.login && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.login && "#ffff"};
          color: ${(props) => props.options.login && "#344767"};
        }
      }
      &:nth-of-type(14) {
        background-color: ${(props) => props.options.logout && "#344767"};
        h3 {
          color: ${(props) => props.options.logout && "#ffff"};
        }
        svg {
          background-color: ${(props) => props.options.logout && "#ffff"};
          color: ${(props) => props.options.logout && "#344767"};
        }
      }

      gap: 20px;
      transition: all 0.2s linear;
      &:focus h3 {
        color: #ffff !important;
      }
      &:hover h3 {
        color: #19034f;
        color: ${(props) => props.colors.pink && "#cb0c9f"}
          ${(props) => props.colors.green && "green"}
          ${(props) => props.colors.sorme && "darkblue"}
          ${(props) => props.colors.orange && "#ff7c02"}
          ${(props) => props.colors.red && "#cd0909"}
          ${(props) => props.colors.blue && "blue"};
      }

      h3 {
        cursor: pointer;
        transition: all 0.2s linear;
        color: #535d78;
      }

      svg {
        background-color: #ededed;
        transition: all 0.3s linear;
        color: #19034f;
        color: ${(props) => props.colors.pink && "#cb0c9f"};
        color: ${(props) => props.colors.green && "green"};
        color: ${(props) => props.colors.sorme && "darkblue"};
        color: ${(props) => props.colors.orange && "#ff7c02"};
        color: ${(props) => props.colors.red && "#cd0909"};
        color: ${(props) => props.colors.blue && "blue"};
        font-size: 20px;
        padding: 10px;
        border-radius: 10px;
      }
    }
  }
  h2 {
    margin: 10px 15px 5px;
  }
`
const SideBar = () => {
  const { icons, setIcons } = useContext(navbarContext);
  const { colors } = useContext(sidebarColorsContext);
  const { sidebarType } = useContext(sidebarTypeContext);
  const [option, setOption] = useState({
    dashboard: true,
    tables: false,
    pay: false,
    automobile: false,
    house: false,
    profile: false,
    terms: false,
    user: false,
    signup: false,
    login: false,
    logout: false,
    drag: false,
    data: false,
    calendar: false,
  });
  return (
    <SideBarDiv
      menu={icons.menu}
      colors={colors}
      options={option}
      sideType={sidebarType}
    >
      <header>
        <img alt="sidebar" src={sidebarLogo} />
        <h1>داشبورد</h1>
        <BsXLg onClick={() => setIcons({ menu: false })} />
      </header>
      <section className="dashboard-options">
        <Link to="dashboard" onClick={() => setOption({ dashboard: true })}>
          <BsShop />
          <h3>داشبورد</h3>
        </Link>
        <Link to="tables" onClick={() => setOption({ tables: true })}>
          <RiTableAltFill />
          <h3>جداول</h3>
        </Link>
        <Link to="payment" onClick={() => setOption({ pay: true })}>
          <BsFillCreditCardFill />
          <h3>پرداخت</h3>
        </Link>
        <Link to="automotive" onClick={() => setOption({ automobile: true })}>
          <FaCar />
          <h3>خودرو</h3>
        </Link>
        <Link to="house" onClick={() => setOption({ house: true })}>
          <BsHouseDoorFill />
          <h3>خانه هوشمند</h3>
        </Link>
        <Link to="dragdrop" onClick={() => setOption({ drag: true })}>
          <BsKanbanFill />
          <h3>چیدمان</h3>
        </Link>
        <Link to="datatables" onClick={() => setOption({ data: true })}>
          <AiFillDatabase />
          <h3>جدول داده ها</h3>
        </Link>
        <Link to="calendar" onClick={() => setOption({ calendar: true })}>
          <BsFillCalendarMonthFill />
          <h3> تقویم رویدادها</h3>
        </Link>
        <h2>صفحات مربوط به اکانت</h2>
        <Link to="profile" onClick={() => setOption({ profile: true })}>
          <FaUserAlt />
          <h3>پروفایل</h3>
        </Link>
        <Link to="terms" onClick={() => setOption({ terms: true })}>
          <GrInstagram />
          <h3>اینستاگرام</h3>
        </Link>
        <Link to="newuser" onClick={() => setOption({ user: true })}>
          <FaUserPlus />
          <h3>کاربر جدید</h3>
        </Link>
        <Link to="signup" onClick={() => setOption({ signup: true })}>
          <SiGnuprivacyguard />
          <h3>ثبت نام</h3>
        </Link>
        <Link to="login" onClick={() => setOption({ login: true })}>
          <GoSignIn />
          <h3>ورود</h3>
        </Link>
        <Link to="/homepage/signup" onClick={() => setOption({ logout: true })}>
          <GoSignOut />
          <h3>خروج</h3>
        </Link>
      </section>
    </SideBarDiv>
  );
};

export default SideBar;
