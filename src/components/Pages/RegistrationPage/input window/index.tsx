import { Button, Input } from "@material-ui/core";
import React from "react";
import emailChecker from "../../../../helpers/InputCheckers/emailChecker";
import { passChecker } from "../../../../helpers/InputCheckers/passChecker";
import Alert from "../../mainPage/modals/alert";
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
  textAlert: string;
  alertCreator: (text: string) => void;
};

const InputWindow = (props: Props) => {
  const reg = (
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    department: string,
    history: any,
    url_to_push: string
  ) => {
    if (!emailChecker(email)) {
      props.alertCreator("Некорректный email!");
    } else {
      if (!passChecker(password)) {
        props.alertCreator(
          "Некорректный пароль.  " +
            "пароль должен быть не короче 8 символов, содержать только латинские символы в обоих регистрах, и по крайней мере 1 спец символ и 1 цифру"
        );
      } else {
        props.getTokenReg(email, password, first_name, last_name, department, history, url_to_push);
      }
    }
  };

  return (
    <div className={style.InputContainer}>
      {props.textAlert !== "" ? <Alert text={props.textAlert} /> : <></>}
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
          reg(
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
