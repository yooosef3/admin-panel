import OnOff from "../shared/OnOff";
import React from "react";
import styled from "styled-components";

const Set = styled.div`
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  padding: 15px;
  h3 {
    margin: 0;
  }
  h4 {
    margin-bottom: 0;
    color: gray;
    font-weight: 800;
    font-size: 18px;
  }
  
  .settings{
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: start;
        gap: 150px;
    }
  }
  
  .setting {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 18px;
    p {
      color: #6b6b6b;
      margin: 6px 0 0;
      font-weight: 600;
    }
  }
`;

const Setting = () => {
  return (
    <Set>
      <h3>تنظیمات برنامه</h3>
      <div className="settings">
        <div className="account">
          <h4>حساب</h4>
          <div className="setting">
            <OnOff />
            <p>وقتی کسی مرا فالو کرد به من ایمیل بزنید</p>
          </div>
          <div className="setting">
            <OnOff />
            <p> وقتی کسی در پست من جواب داد به من ایمیل بزنید</p>
          </div>
          <div className="setting">
            <OnOff />
            <p> وقتی کسی مرا منشن کرد به من ایمیل بزنید</p>
          </div>
        </div>
        <div className="app">
          <h4>برنامه</h4>
          <div className="setting">
            <OnOff />
            <p> راه اندازی و پروژه های جدید</p>
          </div>
          <div className="setting">
            <OnOff />
            <p> به روز رسانی ماهانه محصول</p>
          </div>
          <div className="setting">
            <OnOff />
            <p> عضویت در خبرنامه</p>
          </div>
        </div>
      </div>
    </Set>
  );
};

export default Setting;
