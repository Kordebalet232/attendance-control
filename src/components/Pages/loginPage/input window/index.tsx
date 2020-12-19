import { Button, Input, Typography } from "@material-ui/core";
import React from "react";
import style from "./style.module.css";
import switchPage from "../../../../helpers/PageSwitcher";

type Props = {
  month: number;
  year: number;
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

const InputWindow = (props: Props) => {
  return (
    <div className={style.InputContainer}>
      <Input className={style.Input1} placeholder=" Введите email..." type="email" id="email" required={true} />
      <div className={style.container}>
        <Input
          className={style.Input2}
          placeholder=" Введите пароль..."
          type="password"
          id="password"
          required={true}
        />
        <Button
          onClick={() => {
            switchPage(props.history, "/recovery");
          }}
        >
          Забыли пароль?
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.getTokenLog(
            (document.getElementById("email") as HTMLInputElement)!.value!,
            (document.getElementById("password") as HTMLInputElement)!.value!,
            props.history,
            "/main",
            props.year,
            props.month
          );
        }}
      >
        Войти
      </Button>
      <Typography>ИЛИ</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          switchPage(props.history, "/registration");
        }}
      >
        Зарегестрироваться
      </Button>
    </div>
  );
};

export default InputWindow;
