import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button className={`${style.button} ${style[`${variant}`]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
