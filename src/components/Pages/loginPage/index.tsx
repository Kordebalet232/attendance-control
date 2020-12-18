import React from "react";
import Banner from "../../banner";
import InputWindow from "./input window";
import style from "./style.module.css";

type Props = {
  month: number;
  year: number;
  isAuthed: boolean;
  getTokenLog: (
    email: string,
    password: string,
    history: any,
    url_to_push: string,
    year: number,
    month: number
  ) => void;
  history: any;
};

const LoginPage = (props: Props) => {
  return (
    <div className={style.loginPage}>
      <Banner />
      <InputWindow getTokenLog={props.getTokenLog} history={props.history} month={props.month} year={props.year} />
    </div>
  );
};

export default LoginPage;
