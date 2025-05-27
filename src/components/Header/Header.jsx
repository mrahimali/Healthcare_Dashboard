import React from "react";
import headerStyle from "./Header.module.css";
import { FaBeer } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <div className={`${headerStyle.item} ${headerStyle.head}`}>
        <span>Health</span>care.
      </div>

      <div className={headerStyle.search}>
        <div className={headerStyle.searchContainer}>
          <div className={headerStyle.searchIcon}><FaBeer/></div>
          <input type="text" placeholder="Search..." />
          <div className={headerStyle.bell}>
            <span className={headerStyle.notificationIcon}>🔔</span>
          </div>
        </div>
      </div>

      <div className={`${headerStyle.item} ${headerStyle.icons}`}>
        <span className={headerStyle.userProfile}>👤</span>
        <button className={headerStyle.addButton}>＋</button>
      </div>
    </div>
  );
};

export default Header;
