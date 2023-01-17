import React, { useContext } from "react";
import { fixedContext, sidebarColorsContext, sidebarTypeContext } from "../../App";

import { AiOutlineStar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  padding: 20px 15px;
  left: ${(props) => (props.settings ? "0px" : "-380px")};
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  height: 100vh;
  width: 300px;
  transition: all 0.4s linear;
  background-color: #ffff;
  z-index: 2;

  header h2,
  h3 {
    margin: 0;
  }

  header h3 {
    color: #8393a2;
    padding-bottom: 25px;
    border-bottom: 1px solid #d1d4d6;
  }

  header svg {
    position: absolute;
    left: 30px;
    top: 45px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      color: red;
      transform: scale(1.2);
    }
  }

  .sidebar-colors h3 {
    padding-top: 15px;
  }

  .sidebar-colors section {
    display: flex;
    justify-content: start;
    margin-top: 15px;
    gap: 15px;
  }

  .sidebar-colors div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    transition: all 0.2s linear;
    cursor: pointer;
    border: 1px solid #f7f7f7;

    &:hover {
      border: 1px solid #292929;
    }

    &:nth-of-type(1) {
      background-image: linear-gradient(310deg, #7928ca, #ff0080);
      border: ${props => props.colors.pink && '1px solid #292929'} ;
    }

    &:nth-of-type(2) {
      background-image: linear-gradient(310deg, #141727, #3a416f);
      border: ${props => props.colors.sorme && '1px solid #292929'} ;
    }

    &:nth-of-type(3) {
      background-image: linear-gradient(310deg, #2152ff, #21d4fd);
      border: ${props => props.colors.blue && '1px solid #292929'} ;
    }

    &:nth-of-type(4) {
      background-image: linear-gradient(310deg, #17ad37, #98ec2d);
      border: ${props => props.colors.green && '1px solid #292929'} ;
    }

    &:nth-of-type(5) {
      background-image: linear-gradient(310deg, #f53939, #fbcf33);
      border: ${props => props.colors.orange && '1px solid #292929'} ;
    }

    &:nth-of-type(6) {
      background-image: linear-gradient(310deg, #ea0606, #ff667c);
      border: ${props => props.colors.red && '1px solid #292929'} ;
    }
  }

  .sidenav-type {
    margin-top: 30px;
  }

  .sidenav-type p {
    color: #8393a2;
    margin-top: 0;

    &:nth-of-type(2) {
      margin-top: 18px;
      width: 300px;

      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  .sidenav-type .sidenav-btn {
    display: flex;
    justify-content: start;
    gap: 10px;
  }

  .sidenav-type .sidenav-btn button {
    background-color: #cb0c9e91;
    color: #ffff;
    padding: 8px 40px;
    width: 150px;
    border: 0;
    border-radius: 4px;
    font-size: 22px;
    transition: all 0.2s linear;

    @media (min-width: 1200px) {
      cursor: pointer;
      border: 1px solid #9a045b;
      &:first-of-type{
          background-color: ${props => props.sideType ? '#9a045b' : 'white'};
          color: ${props => props.sideType ? 'white' : '#9a045b'};
        }
      &:last-of-type{
          background-color: ${props => props.sideType ? 'white' : '#9a045b'};
          color: ${props => props.sideType ? '#9a045b' : 'white'};
        }
        
        &:hover{
          transform: scale(1.03)
        }
      }
    }
  

  .navbar-fixed {
    margin-top: 25px;
  }

  .navbar-fixed section {
    width: 45px;
    height: 25px;
    margin-top: 5px;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 20px;
    padding: 0 1px;
    cursor: pointer;
    transition: all 0.2s linear;
    background-color: ${(props) => (props.fixed ? "#23b700" : "#d2d2d2")};

    div {
      width: 23px;
      height: 23px;
      border-radius: 50%;
      position: absolute;
      transition: all 0.2s linear;
      left:${(props) => (props.fixed ? "22.5px" : "1px")};
      background-color: #ffff;
    }
  }

  .setting-download {
    margin-top: 30px;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      button {
        width: 300px;
        height: 40px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: all 0.2s linear;

        &:nth-of-type(1) {
          color: #ffff;
          background-color: #1c1c37;
          &:hover {
            background-color: #ffff;
            color: #1c1c37;
            border: 1px solid #1c1c37;
          }
        }

        &:nth-of-type(2) {
          color: #1c1c37;
          background-color: #ffff;
          border: 1px solid #1c1c37;

          &:hover {
            background-color: #1c1c37;
            color: #ffff;
          }
        }
      }
    }
    .star {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #8393a2;
      gap: 10px;
      width: fit-content;
      margin: 10px auto;

      small {
        text-align: center;
        padding: 5px 2px 2px 10px;
        font-weight: 600;
        color: #8393a2;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
          color: #006eff;
        }
      }

      div {
        display: flex;
        padding: 0 5px !important;
        background-color: #efefef;
        align-items: center;
        border-left: 1px solid #8393a2;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
          background-color: #e6e6e6;
        }

        span {
          font-weight: 600;
          color: #8393a2;
          padding-top: 2px;
          display: block;
        }

        svg {
          color: #ffbb00;
        }
      }
    }
  }

  .thanks {
    margin: 20px auto;
    text-align: center;

    section {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 10px;

      .share {
        background-color: #3a416f;
        color: #ffff;
        padding: 0px 10px !important;
        height: 35px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        transition: all 0.2s linear;

        &:hover {
          background-color: #2b3052;
        }

        p{
          padding-top: 5px;
          color: #ffff !important;
        }
      }
    }
  }
`;

const SettingSidebar = ({ settings, setSettings }) => {
  const {fixed, setFixed} = useContext(fixedContext);
  const {colors, setColors} = useContext(sidebarColorsContext);
  const {sidebarType, setSidebarType} = useContext(sidebarTypeContext);
  return (
    <Div settings={settings} fixed={fixed} colors={colors} sideType={sidebarType}>
      <header>
        <div>
          <h2>تنظیمات ظاهری صفحه</h2>
          <h3>گزینه های داشبورد ما را ببینید</h3>
        </div>
        <BsXLg onClick={setSettings} />
      </header>
      <div className="sidebar-colors">
        <h3>رنگ های سایدبار</h3>
        <section>
          <div onClick={() => setColors({pink :!colors.pink})}></div>
          <div onClick={() => setColors({sorme :!colors.sorme})}></div>
          <div onClick={() => setColors({blue :!colors.blue})}></div>
          <div onClick={() => setColors({green :!colors.green})}></div>
          <div onClick={() => setColors({orange :!colors.orange})}></div>
          <div onClick={() => setColors({red :!colors.red})}></div>
        </section>
      </div>
      <div className="sidenav-type">
        <h3>نوع سایدبار</h3>
        <p>بین دو گزینه یکی را انتخاب کنید</p>
        <div className="sidenav-btn">
          <button onClick={() => setSidebarType(true)}>سفید</button>
          <button onClick={() => setSidebarType(false)}>صورتی</button>
        </div>
        <p>شما می توانید نوع سایدبار را تنها در حالت دسکتاپ تغییر دهید</p>
      </div>
      <div className="navbar-fixed">
        <h3>Navbar Fixed</h3>
        <section onClick={() => setFixed(!fixed)}>
          <div></div>
        </section>
      </div>
      <div className="setting-download">
        <section>
          <button>دانلود رایگان</button>
          <button>مشاهده داکیومنت</button>
        </section>
        <div className="star">
          <div>
            <AiOutlineStar />
            <span>ستاره</span>
          </div>
          <small>367</small>
        </div>
      </div>
      <div className="thanks">
        <h3>ممنون بابت اشتراک ما!</h3>
        <section>
          <div className="share">
            <BsTwitter />
            <p>توییت</p>
          </div>
          <div className="share">
            <BsFacebook />
            <p>اشتراک</p>
          </div>
        </section>
      </div>
    </Div>
  );
};

export default SettingSidebar;
