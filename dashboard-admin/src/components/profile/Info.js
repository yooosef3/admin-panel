import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import { RiPencilFill } from "react-icons/ri";
import styled from "styled-components";

const Inf = styled.div`
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  border-radius: 6px;
  .info {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 150px;
      .me{
        width: 25%;
      }
    }
  }
  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0;
    }
    svg {
      color: gray;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.2s linear;
      &:hover {
        color: #292929;
      }
    }
  }
  p {
    color: gray;
    font-weight: 500;
    margin-bottom: 40px;
  }
  h4 {
    margin: 10px 0;
    span {
      color: gray;
      margin-right: 10px;
    }
  }
  .social-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .social {
      display: flex;
      gap: 10px;
      svg {
        color: #4f6888;
        cursor: pointer;
      }
    }
  }
`;

const Info = () => {
  return (
    <Inf>
      <div className="info-header">
        <h3>اطلاعات پروفایل</h3>
        <RiPencilFill />
      </div>
      <div className="info">
        <div className="me">
          <p>
            سلام، من یوسف خدری هستم، اگر نمی توانید تصمیم بگیرید، پاسخ منفی است.
            اگر دو مسیر به یک اندازه دشوار هستند، یکی را در کوتاه مدت دردناک تر
            انتخاب کنید (پرهیز از درد، ایجاد توهم برابری است).
          </p>
        </div>
        <div className="info-list">
          <h4>
            نام کامل: <span>یوسف خدری</span>
          </h4>
          <h4>
            موبایل: <span dir="ltr">(+98) 914 968 9984</span>
          </h4>
          <h4>
            ایمیل: <span>yooosef.khedri@gmail.com</span>
          </h4>
          <h4>
            لوکیشن: <span>ایران</span>
          </h4>
          <div className="social-profile">
            <h4>شبکه های اجتماعی</h4>
            <div className="social">
              <BsInstagram />
              <BsTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </Inf>
  );
};

export default Info;
