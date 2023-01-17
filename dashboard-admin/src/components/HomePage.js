import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "./SideBar";
import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Outlet />
      <SideBar />
    </div>
  );
};

export default HomePage;
