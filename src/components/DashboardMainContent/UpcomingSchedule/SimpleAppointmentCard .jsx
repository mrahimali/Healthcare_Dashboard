import React from 'react'
import UpcomingCard from './ChildCard/UpcomingCard'
import { FaSyringe } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import parentStyles from './SimpleAppointmentCard .module.css'
import { FaHeart, FaUserMd  } from "react-icons/fa";

const SimpleAppointmentCard  = () => {
  return (
    <div className={parentStyles.container}>
        <span className={parentStyles.span}>The Upcomming Schedule</span>
       <UpcomingCard day="On Thursday" type={["Health Check Up Complete", "Opthalmologist"]} time={["11:00 AM", "14:00 PM"]} icon={[<FaSyringe/>, <FaEye/>]}/>

       <UpcomingCard day="On Saturday" type={["Cardiologist", "Neurologist"]} time={["12:00 AM", "16:00 PM"]} icon={[<FaHeart/>, <FaUserMd/>]}/>
    </div>
  )
}

export default SimpleAppointmentCard 