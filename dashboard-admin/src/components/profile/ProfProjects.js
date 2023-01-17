import ProfProject from "./ProfProject";
import React from "react";
import hull from "../../assets/images/home-decor-2.b4e5397c.jpg";
import room from "../../assets/images/home-decor-3.74d13fcb.jpg";
import sofa from "../../assets/images/home-decor-1.05e218fd.jpg";
import styled from "styled-components";

const Prjt = styled.div`
  background-color: #ffff;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  margin-top: 20px;
  border-radius: 6px;
  h3 {
    margin: 0 0 15px 0;
  }
  span {
    color: gray;
    font-weight: 500;
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (min-width: 640px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media (min-width: 1200px) {
      flex-wrap: nowrap;
    }
  }

  .add-project{
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    padding: 15px 0;
    flex-grow: 1;
    margin: 0 auto;
    margin-top: 15px;
    h1, h2{
      margin: 0;
    }
    h1{
      font-size: 64px;
    }
    
  }
`;

const ProfProjects = () => {
  return (
    <Prjt>
      <h3>پروژه ها</h3>
      <span>معماران خانه ها را طراحی می کنند</span>
      <div className="projects">
        <ProfProject
          image={sofa}
          name="نوین"
          text="همانطور که uber از طریق حجم عظیمی از آشفتگی های مدیریت داخلی کار می کند."
        />
        <ProfProject
          image={hull}
          name="اسکاندیناویی"
          text=" موسیقی چیزی است که هر فردی نظر خاص خود را در مورد آن دارد."
        />
        <ProfProject
          image={room}
          name="مینیمالیست"
          text=" افراد مختلف دارای سلیقه های مختلف و انواع مختلفی از موسیقی هستند."
        />
        <div className="add-project">
          <h1>+</h1>
          <h2>پروژه جدید</h2>
        </div>
      </div>
    </Prjt>
  );
};

export default ProfProjects;
