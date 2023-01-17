import React, { useState } from "react";

import { AiTwotoneSetting } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiMessage3Fill } from "react-icons/ri";
import avatar from "../../assets/images/bruce-mars.45f64779.jpg";
import header from "../../assets/images/curved0.d146ec6e.jpg";
import styled from "styled-components";

const Head = styled.div`
  margin: 20px 0;
  position: relative;
  img {
    width: 100%;
    border-radius: 8px;
  }
  .profile-info {
    position: absolute;
    background-color: #e7eff9b0;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 15px;
    bottom: -170px;
    left: 15px;
    right: 15px;
    @media (min-width: 640px) {
        bottom: -90px;
    }
    
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        bottom: -30px;
    }
    .avatar {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      img {
        width: 70px;
        height: 70px;
      }
      .profile-name {
        display: flex;
        flex-direction: column;
        h3 {
          margin: 0;
        }
        span {
          color: #454545;
          font-weight: 500;
        }
      }
    }
    .profile-filter {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      @media (min-width: 640px) {
        flex-direction: row;
      }
      .filtered-item {
        background-color: #ffff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      }
      .filter-item {
        margin: 0 auto;
        display: flex;
        align-items: center;
        transition: all 0.2s linear;
        width: 90%;
        gap: 5px;
        padding: 0 10px 0;
        cursor: pointer;
        height: 40px;
        font-weight: 500;
        border-radius: 6px;
        @media (min-width: 640px){
            justify-content: center;
        }
        @media (min-width: 768px) {
            width: 100px;
        }
        svg {
          color: #334b6a;
        }
        h4 {
          margin: 3px 0 0;
        }
      }
    }
  }
`;

const ProfileHeader = () => {
  const [filtered, setFiltered] = useState("info");

  return (
    <Head filtered={filtered}>
      <img alt="header" src={header} />
      <div className="profile-info">
        <div className="avatar">
          <img alt="avatar" src={avatar} />
          <div className="profile-name">
            <h3>یوسف خدری</h3>
            <span>برنامه نویس ری اکت</span>
          </div>
        </div>
        <div className="profile-filter">
          <Link to='info' className= {`${filtered === 'info' && 'filtered-item'} filter-item`} onClick={() => setFiltered("info")}>
            <BsFillInfoSquareFill />
            <h4>اطلاعات</h4>
          </Link>
          <Link to='message' className= {`${filtered === 'massage' && 'filtered-item'} filter-item`} onClick={() => setFiltered("massage")}>
            <RiMessage3Fill />
            <h4>پیام</h4>
          </Link>
          <Link to='setting' className= {`${filtered === 'setting' && 'filtered-item'} filter-item`} onClick={() => setFiltered("setting")}>
            <AiTwotoneSetting />
            <h4>تنظیمات</h4>
          </Link>
        </div>
      </div>
    </Head>
  );
};

export default ProfileHeader;
