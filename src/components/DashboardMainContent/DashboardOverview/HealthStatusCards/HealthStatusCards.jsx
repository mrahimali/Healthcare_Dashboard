import React from 'react'
import Card from './Card/Card'
import healthStyles from'./HealthStatusCards.module.css'
import lungs from '../../../../data/lungs.png'
import teeth from '../../../../data/teeth.png'
import bone from '../../../../data/bone.png'


const HealthStatusCards = () => {
  return (
    <div className={healthStyles.healthStatusContainer}>
        <Card name='Lungs' date='26 Oct 2021' img={lungs} color='red' />
        <Card name='Teeth' date='20 Sept 2021' img={teeth} color='green'/>
        <Card name='Bone' date='15 Aug 2025' img={bone} color='orange'/>
    </div>
  )
}

export default HealthStatusCards