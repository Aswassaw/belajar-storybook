import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const { size = "medium", ...rest } = props;

  return (
    <input
      type='text'
      className={`${style.input} ${style[`${size}`]}`}
      {...rest}
    />
  );
};

export default Input;
