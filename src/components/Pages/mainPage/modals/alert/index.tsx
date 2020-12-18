import React from "react";
import style from "./style.module.css";

type Props = {
  text: string;
};

const Alert = (props: Props) => {
  return (
    <div className={style.alert} role="alert">
      {props.text}
    </div>
  );
};

export default Alert;
