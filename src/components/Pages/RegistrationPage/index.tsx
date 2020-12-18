import React from "react";
import Banner from "../../banner";
import InputWindow from "./input window";
import style from "./style.module.css";

type Props = {
  isAuthed: boolean;
  getTokenReg: (
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    department: string,
    history: any,
    url_to_push: string
  ) => void;
  history: any;
};

const RegistrationPage = (props: Props) => {
  return (
    <div className={style.regPage}>
      <Banner />
      <InputWindow getTokenReg={props.getTokenReg} history={props.history} />
    </div>
  );
};

export default RegistrationPage;
