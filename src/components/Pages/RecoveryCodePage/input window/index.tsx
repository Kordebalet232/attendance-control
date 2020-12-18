import { Button, Input } from "@material-ui/core";
import React from "react";
import style from "./style.module.css";

type Props = {
  CheckRecoveryCode: (code: string, history: any, url_to_push: string) => void;
  history: any;
};

const InputWindow = (props: Props) => {
  return (
    <div className={style.InputContainer}>
      <Input className={style.Input} placeholder=" Введите код..." id="code" required={true} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.CheckRecoveryCode(
            (document.getElementById("code") as HTMLInputElement)!.value!,
            props.history,
            "/recovery/code/new_password"
          );
        }}
      >
        Ок
      </Button>
    </div>
  );
};

export default InputWindow;
