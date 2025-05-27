import React from 'react'
import sideStyles from './Sidebar.module.css'
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaPlusSquare,
  FaChartBar,
  FaVials,
  FaComments,
  FaPhone,
  FaCog
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={sideStyles.sidebar}>
      <ul className={sideStyles.sidebarMenu}>
        <div className={sideStyles.text}>General</div>
        <li className={sideStyles.active}><FaTachometerAlt /> Dashboard</li>
        <li><FaHistory /> History</li>
        <li><FaCalendarAlt /> Calendar</li>
        <li><FaPlusSquare /> Appointment</li>
        <li><FaChartBar /> Statistics</li>
        <li><FaVials /> Tests</li>
        <div className={sideStyles.text}>Tools</div>
        <li><FaComments /> Chat</li>
        <li><FaPhone /> Support</li>
        <li className={sideStyles.setting}><FaCog /> Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;
