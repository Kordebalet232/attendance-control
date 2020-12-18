import React from "react";
import Banner from "../../banner";
import InputWindow from "./input window";
import style from "./style.module.css";

type Props = {
  CheckRecoveryCode: (code: string, history: any, url_to_push: string) => void;
  history: any;
};

const ResetCodePage = (props: Props) => {
  return (
    <div className={style.ResetCodePage}>
      <Banner />
      <InputWindow history={props.history} CheckRecoveryCode={props.CheckRecoveryCode} />
    </div>
  );
};

export default ResetCodePage;
