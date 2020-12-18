import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Input } from "@material-ui/core";
import style from "./style.module.css";
import { worker } from "../../../../../types/user";
import Alert from "../alert";
import findWorker from "../../../../../helpers/findWorker";
import checkDates from "../../../../../helpers/checkDates";

type Props = {
  token: string;
  workers: worker[];
  textAlert: string;
  alertCreator: (text: string) => void;
  createVacation: (token: string, worker_id: number, start_date: Date, end_date: Date) => void;
};

const GiveVacationDialog = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseOnCancel = () => {
    setOpen(false);
  };

  const handleCloseOnSubmit = (
    start_date: string,
    end_date: string,
    name: string,
    second_name: string,
    patronymic: string
  ) => {
    const id = findWorker(props.workers, name, second_name, patronymic);
    if (id === -1) {
      props.alertCreator("Рабочий не найден");
    }
    const check = checkDates(start_date, end_date, id, props.workers);
    if (check === -1) {
      props.alertCreator("Выбраны некорректные даты");
    }
    if (check === -2) {
      props.alertCreator("У выбранного работника недостаточно отпускных дней");
    }
    props.createVacation(props.token, id, new Date(start_date), new Date(end_date));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" style={{ margin: "0px 10px 0px 10px" }} onClick={handleClickOpen}>
        Выдать отпуск
      </Button>
      <Dialog open={open} onClose={handleCloseOnCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Выдача отпуска</DialogTitle>
        <DialogContent className={style.dialog}>
          {props.textAlert !== "" ? <Alert text={props.textAlert} /> : <></>}
          <Input className={style.input} type="text" placeholder="Введите фамилию" id="second_name" required={true} />
          <Input className={style.input} type="text" placeholder="Введите имя" id="first_name" required={true} />
          <Input className={style.input} type="text" placeholder="Введите отчество" id="patronymic" required={true} />
          <div>
            <p> Дата начала: </p>
            <Input className={style.input} type="date" id="start_date" required={true} />
            <p> Дата окончания: </p>
            <Input className={style.input} type="date" id="end_date" required={true} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOnCancel} color="primary">
            Отменить
          </Button>
          <Button
            onClick={() => {
              handleCloseOnSubmit(
                (document.getElementById("start_date") as HTMLInputElement)!.value,
                (document.getElementById("end_date") as HTMLInputElement)!.value,
                (document.getElementById("first_name") as HTMLInputElement)!.value,
                (document.getElementById("second_name") as HTMLInputElement)!.value,
                (document.getElementById("patronymic") as HTMLInputElement)!.value
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

export default GiveVacationDialog;
