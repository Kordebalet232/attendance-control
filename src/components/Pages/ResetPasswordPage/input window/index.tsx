import { Button, Input } from "@material-ui/core";
import React from "react";
import { checkPasswords, passChecker } from "../../../../helpers/InputCheckers/passChecker";
import Alert from "../../mainPage/modals/alert";
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
  token: string;
  id: number;
  history: any;
  year: number;
  month: number;
  textAlert: string;
};

const InputWindow = (props: Props) => {
  const updatePass = (
    new_pass: string,
    check_pass: string,
    history: any,
    url_to_push: string,
    token: string,
    id: number,
    year: number,
    month: number
  ) => {
    if (!passChecker(new_pass)) {
      props.alertCreator("Некорректный пароль!");
    }
    if (!checkPasswords(new_pass, check_pass)) {
      props.alertCreator("Введенные пароли не совпадают");
    }
    props.setNewPass(new_pass, history, url_to_push, token, id, year, month);
  };
  return (
    <div className={style.InputContainer}>
      {props.textAlert !== "" ? <Alert text={props.textAlert} /> : <></>}
      <Input className={style.Input} placeholder=" Введите новый пароль..." id="pass" required={true} />
      <Input className={style.Input} placeholder=" Подтвердите пароль..." id="checkPass" required={true} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          updatePass(
            (document.getElementById("pass") as HTMLInputElement)!.value!,
            (document.getElementById("pass") as HTMLInputElement)!.value!,
            props.history,
            "/main",
            props.token,
            props.id,
            props.year,
            props.month
          );
        }}
      >
        Войти
      </Button>
    </div>
  );
};

export default InputWindow;
