import React from "react";
import Banner from "../../banner";
import InputWindow from "./input window";
import style from "./style.module.css";

type Props = {
  setNewPass: (
    new_pass: string,
    history: any,
    url_to_push: string,
    token: string,
    id: number,
    year: number,
    month: number
  ) => void;
  alertCreator: (text: string) => void;
  history: any;
  token: string;
  id: number;
  year: number;
  month: number;
  isAuthed: boolean;
  textAlert: string;
};

const ResetPasswordPage = (props: Props) => {
  return (
    <div className={style.ResetPasswordPage}>
      <Banner />
      <InputWindow
        history={props.history}
        setNewPass={props.setNewPass}
        token={props.token}
        id={props.id}
        year={props.year}
        month={props.month}
        alertCreator={props.alertCreator}
        textAlert={props.textAlert}
      />
    </div>
  );
};

export default ResetPasswordPage;
