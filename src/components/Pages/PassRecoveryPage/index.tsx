import React from "react";
import Banner from "../../banner";
import InputWindow from "./input window";
import style from "./style.module.css";

type Props = {
  RecoverPass: (email: string, history: any, url_to_push: string) => void;
  history: any;
};

const RecoverPassPage = (props: Props) => {
  return (
    <div className={style.regPage}>
      <Banner />
      <InputWindow RecoverPass={props.RecoverPass} history={props.history} />
    </div>
  );
};

export default RecoverPassPage;
