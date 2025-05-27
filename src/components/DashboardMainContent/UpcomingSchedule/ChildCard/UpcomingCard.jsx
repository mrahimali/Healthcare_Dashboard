import React from 'react'
import MyCard from '../GrandChildCard/MyCard'
import upcomingStyle from './UpcommingCard.module.css'

const UpcomingCard = (props) => {
  return (
    <div className={upcomingStyle.container}>
      <span className={upcomingStyle.span}>{props.day}</span>
      <div className={upcomingStyle.cardcontainer}>
        {props.type.map((check, index) => (
          <div className={upcomingStyle.parentCard}>
              <MyCard key={index} title={check} time={props.time[index]} icon={props.icon[index]}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingCard