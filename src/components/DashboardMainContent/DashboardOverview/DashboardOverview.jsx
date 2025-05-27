import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import dashStyles from './DashboardOverview.module.css'

const DashboardOverview = () => {
  return (
    <div >
        <div className={dashStyles.upper}>
            <div className={dashStyles.title}>Dashboard</div>
            <div className={dashStyles.filter}>This Week<FaChevronDown/></div>
        </div>
        <div className={dashStyles.Mysection}>
            <AnatomySection/>
            <HealthStatusCards/>
        </div>

    </div>
  )
}

export default DashboardOverview