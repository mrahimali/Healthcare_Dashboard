import React from 'react'
import img from './../../../../data/human.png'
import anatomyStyles from './AnatomySection.module.css'
import { FaHeart, FaWalking } from "react-icons/fa";



const AnatomySection = () => {
  return (
    <div className={anatomyStyles["anatomy-container"]}>
        <img src={img} alt=""/>
        <div>
            <div className={anatomyStyles.heart}><FaHeart className={anatomyStyles["heart-icon"]} style={{ color: 'red', fontSize: '24px' }} />Healthy Heart</div>
            <div className={anatomyStyles.legs}>Healthy Legs<FaWalking className={anatomyStyles["legs-icon"]} style={{ color: 'red', fontSize: '24px' }} /></div>

        </div>
    </div>
    

  )
}

export default AnatomySection