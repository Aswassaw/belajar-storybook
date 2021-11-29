import React from "react";
import style from "./Center.module.css";

const Center = (props) => {
  return <div className={style.center}>{props.children}</div>;
};

export default Center;
