import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import style from "./style.module.css";
import { Input } from "@material-ui/core";
import Alert from "../alert";

type Props = {
  token: string;
  user_id: number;
  history: any;
  url: string;
  textAlert: string;
  year: number;
  month: number;
  alertCreator: (text: string) => void;
  CreateWorker: (
    token: string,
    first_name: string,
    second_name: string,
    patronymic: string,
    hour_norm: string,
    vacation_days: string,
    user_id: number,
    history: any,
    url: string,
    start_day: string,
    end_day: string,
    year: number,
    month: number
  ) => void;
};

const AddWorkerDialog = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseOnCancel = () => {
    setOpen(false);
  };
  const handleCloseOnSubmit = (
    token: string,
    first_name: string,
    second_name: string,
    patronymic: string,
    hour_norm: string,
    vacation_days: string,
    user_id: number,
    history: any,
    url: string,
    start_day: string,
    end_day: string
  ) => {
    console.log(hour_norm);
    if (
      first_name === "" ||
      second_name === "" ||
      patronymic === "" ||
      vacation_days === "" ||
      hour_norm === "undefined" ||
      start_day === "" ||
      end_day === ""
    ) {
      props.alertCreator("Заполните все поля!");
    } else {
      props.CreateWorker(
        token,
        first_name,
        second_name,
        patronymic,
        hour_norm,
        vacation_days,
        user_id,
        history,
        url,
        start_day,
        end_day,
        props.year,
        props.month
      );
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" style={{ margin: "0px 10px 0px 10px" }} onClick={handleClickOpen}>
        Добавить сотрудника
      </Button>
      <Dialog open={open} onClose={handleCloseOnCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавление нового сотрудника</DialogTitle>
        <DialogContent className={style.dialog}>
          {props.textAlert !== "" ? <Alert text={props.textAlert} /> : <></>}
          <Input
            className={style.Input}
            placeholder="Введите фамилию нового сотрудника"
            id="second_name"
            required={true}
          />
          <Input className={style.Input} placeholder="Введите имя нового сотрудника" id="first_name" required={true} />
          <Input
            className={style.Input}
            placeholder="Введите отчество нового сотрудника"
            id="patronymic"
            required={true}
          />
          <Input
            className={style.Input}
            placeholder="Введите количество отпускных дней"
            id="vacations"
            required={true}
          />
          <div>
            <p>Выберите норму часов:</p>
            <p>
              <input type="radio" name="hour_norm" value="36" />
              {"36"}
            </p>
            <p>
              <input type="radio" name="hour_norm" value="40" />
              {"40"}
            </p>
          </div>
          <Input className={style.Input} type="time" placeholder="00:00" id="start_day" required={true} />
          <Input className={style.Input} type="time" placeholder="00:00" id="end_day" required={true} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOnCancel} color="primary">
            Отменить
          </Button>
          <Button
            onClick={() => {
              handleCloseOnSubmit(
                props.token,
                (document.getElementById("first_name") as HTMLInputElement)!.value,
                (document.getElementById("second_name") as HTMLInputElement)!.value,
                (document.getElementById("patronymic") as HTMLInputElement)!.value,
                "" + (document.querySelector('input[name="hour_norm"]:checked') as HTMLInputElement)!.value,
                (document.getElementById("vacations") as HTMLInputElement)!.value,
                props.user_id,
                props.history,
                props.url,
                (document.getElementById("start_day") as HTMLInputElement)!.value,
                (document.getElementById("end_day") as HTMLInputElement)!.value
              );
            }}
            color="primary"
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddWorkerDialog;
