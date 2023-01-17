import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
  div {
    h3 {
      svg {
        color: red;
      }
      a {
        margin: 0 5px;
        transition: all 0.2s linear;
        &:hover {
          color: orange;
        }
      }
    }
  }
  ul {
    a {
      color: gray;
      margin: 0 15px;
      transition: all 0.2s linear;
      font-weight: 600;
      &:hover {
        color: orange;
      }
    }
  }
`;
const Footer = () => {
  return (
    <Foot>
      <div>
        <h3>
          ساخته شده با <AiFillHeart /> توسط <Link to="#">یوسف خدری</Link> برای
          زندگی بهتر © 2022
        </h3>
      </div>
      <ul>
        <Link to="#">درباره ما </Link>
        <Link to="#">بلاگ </Link>
        <Link to="#">گواهی </Link>
        <Link to="#">تیم </Link>
      </ul>
    </Foot>
  );
};

export default Footer;
