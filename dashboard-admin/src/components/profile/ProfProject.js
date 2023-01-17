import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

const Proj = styled.div`
  width: 300px;
  margin: 0 auto;
  flex-grow: 1;
  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  .project-info {
    h3 {
      margin: 10px 0 0;
    }
    p {
      margin: 15px 0;
      color: gray;
    }
    .button-widget {
      display: flex;
      justify-content: space-between;
      a {
        border: 2px solid rgb(23, 193, 232);
        padding: 4px 10px;
        border-radius: 6px;
        color: rgb(23, 193, 232);
        font-weight: 500;
        transition: all 0.2s linear;
        &:hover {
          color: #ffff;
          background-color: rgb(23, 193, 232);
          border: 2px solid #ffff;
        }
      }
      .widget {
        display: flex;
        img {
          width: 30px;
          border-radius: 50%;
          margin: 0 -6px;
          border: 2px solid #ffff;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            border: 2px solid  rgb(23, 193, 232);
            z-index: 5;
          }
        }
      }
    }
  }
`;

const ProfProject = ({ image, name, text }) => {
  return (
    <Proj>
      <img alt="project" src={image} />
      <div className="project-info">
        <h3>{name}</h3>
        <p> {text}</p>
        <div className="button-widget">
          <Link to="#">مشاهده پروژه</Link>
          <div className="widget">
            <img alt="widget" src={team1} />
            <img alt="widget" src={team2} />
            <img alt="widget" src={team3} />
            <img alt="widget" src={team4} />
          </div>
        </div>
      </div>
    </Proj>
  );
};

export default ProfProject;
