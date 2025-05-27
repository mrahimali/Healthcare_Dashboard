import React from "react";
import mycardStyle from './MyCard.module.css'

const MyCard = (props) => {
  return (
    <div className={mycardStyle.conatiner}>
      <div className={mycardStyle.flex}>
        <div className={mycardStyle.title}>{props.title}</div>
        <div className={mycardStyle.icon}>{props.icon}</div>
      </div>
      <div>
        {props.time}
      </div>
    </div>
  );
};

export default MyCard;
