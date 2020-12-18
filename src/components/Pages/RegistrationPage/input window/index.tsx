import { Button, Input } from "@material-ui/core";
import React from "react";
import style from "./style.module.css";

type Props = {
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

const InputWindow = (props: Props) => {
  return (
    <div className={style.InputContainer}>
      <Input className={style.Input} placeholder=" Введите email..." type="email" id="email" required={true} />
      <Input className={style.Input} placeholder=" Введите пароль..." type="password" id="password" required={true} />
      <Input className={style.Input} placeholder=" Введите имя..." type="text" id="FirstName" />
      <Input className={style.Input} placeholder=" Введите фамилию..." type="text" id="LastName" />
      <Input className={style.Input} placeholder=" Введите название отдела..." type="text" id="Department" />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px 10px 10px 10px" }}
        onClick={() => {
          props.getTokenReg(
            (document.getElementById("email") as HTMLInputElement)!.value!,
            (document.getElementById("password") as HTMLInputElement)!.value!,
            (document.getElementById("FirstName") as HTMLInputElement)!.value!,
            (document.getElementById("LastName") as HTMLInputElement)!.value!,
            (document.getElementById("Department") as HTMLInputElement)!.value!,
            props.history,
            "/main"
          );
        }}
      >
        Зарегестрироваться
      </Button>
    </div>
  );
};

export default InputWindow;
