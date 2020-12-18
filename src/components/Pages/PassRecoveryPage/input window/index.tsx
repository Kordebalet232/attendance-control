import { Button, Input } from "@material-ui/core";
import React from "react";
import style from "./style.module.css";

type Props = {
  RecoverPass: (email: string, history: any, url_to_push: string) => void;
  history: any;
};

const InputWindow = (props: Props) => {
  return (
    <div className={style.InputContainer}>
      <Input className={style.Input} placeholder=" Введите email..." type="email" id="email" required={true} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.RecoverPass(
            (document.getElementById("email") as HTMLInputElement)!.value!,
            props.history,
            "/recovery/code"
          );
        }}
      >
        Восстановить
      </Button>
    </div>
  );
};

export default InputWindow;
