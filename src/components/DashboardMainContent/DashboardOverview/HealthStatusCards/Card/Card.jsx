import React from "react";
import cardStyles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.img}>
        <div>
          <img src={props.img} alt="" style={{width:'40px'}} />
        </div>
        <div className={cardStyles.text}>
          <span>{props.name}</span>
        </div>
      </div>

      <div className={cardStyles.date}>
        <span>{props.date}</span>
      </div>
      <div className={cardStyles["progress-bar"]}>
        <div className={cardStyles["progress-filled"]} style={{backgroundColor:props.color}}></div>
      </div>
    </div>
  );
};

export default Card;