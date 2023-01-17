import React, { useContext } from "react";
import { fixedContext, navbarContext } from "../../App";

import { BsClockFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import SettingSidebar from "./SettingSidebar";
import alert1 from "../../../src/assets/images/team-2.jpg";
import alert2 from "../../../src/assets/images/logo-spotify.svg";
import styles from "../../styles/Navbar.module.scss"

const Navbar = ({route}) => {
  const { icons, setIcons } = useContext(navbarContext);
  const {fixed} = useContext(fixedContext);
  return (
    // Navbar
    <div className={`${fixed && styles.navbarFixed} ${styles.navbar}`}>
      {/* dashboard */}
      <div className={styles.dashboard}>
        <div>
          <h3>صفحات</h3>
          <h3>/</h3>
          <h3> {route}</h3>
        </div>
        <h2>{route}</h2>
      </div>
      {/* buttons */}
      <div className={styles.buttons}>
        <div className={styles.search}>
          <input placeholder="جستجو ..." type="search" />
          <FiSearch />
        </div>
        <button id={styles.creator}>سازنده</button>
        <Link to='/homepage/login' className={styles.login}>
          <FaUser id={styles.navIcons} />
          <span>ورود</span>
        </Link>
        {icons.menu ? (
          <CgMenuLeft
            id={styles.navIcons}
            className={styles.GiHamburgerMenu}
            onClick={() => setIcons({ menu: !icons.menu })}
          />
        ) : (
          <GiHamburgerMenu
            id={styles.navIcons}
            className={styles.GiHamburgerMenu}
            onClick={() => setIcons({ menu: !icons.menu })}
          />
        )}
        <IoSettingsSharp
          id={styles.navIcons}
          className={styles.IoSettingsSharp}
          onClick={() => setIcons({ settings: !icons.settings })}
        />
        <SettingSidebar settings={icons.settings} setSettings={setIcons} />
        <div className={styles.bell}>
          <BsFillBellFill
            id={styles.navIcons}
            onClick={() => setIcons({ bellIcon: !icons.bellIcon })}
          />
          <div className={`${!icons.bellIcon && styles.hideAlert} ${styles.alert}`}>
            <div className={styles.alertSection}>
              <img alt="alert" src={alert1} />
              <div className={styles.alertInfo}>
                <section>
                  <h4> پیام جدید از</h4>
                  <p>یوسف</p>
                </section>
                <div>
                  <BsClockFill />
                  <small>13 دقیقه پیش</small>
                </div>
              </div>
            </div>
            <div className={styles.alertSection}>
              <img alt="alert" src={alert2} />
              <div className={styles.alertInfo}>
                <section>
                  <h4> آلبوم جدید از</h4>
                  <p>مایکل جکسون</p>
                </section>
                <div>
                  <BsClockFill />
                  <small>1 روز </small>
                </div>
              </div>
            </div>
            <div className={styles.alertSection}>
              <div className={styles.pay}>
                <FaCcAmazonPay />
              </div>
              <div className={styles.alertInfo}>
                <section>
                  <p>پرداخت با موفقیت انجام شد</p>
                </section>
                <div>
                  <BsClockFill />
                  <small>5 دقیقه پیش</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
