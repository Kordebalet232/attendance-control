import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Input } from "@material-ui/core";
import style from "./style.module.css";
import { worker } from "../../../../../types/user";
import findWorker from "../../../../../helpers/findWorker";
import Alert from "../alert";

type Props = {
  token: string;
  url: string;
  user_id: number;
  history: any;
  workers: worker[];
  year: number;
  month: number;
  alertCreator: (text: string) => void;
  textAlert: string;
  deleteWorker: (
    token: string,
    worker_id: number,
    user_id: number,
    history: any,
    url: string,
    year: number,
    month: number
  ) => void;
};

const DeleteWorkerDialog = (props: Props) => {
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
    user_id: number,
    history: any,
    url: string,
    workers: worker[]
  ) => {
    if (first_name === "" || second_name === "" || patronymic === "") {
      props.alertCreator("Заполните все поля!");
    } else {
      const id = findWorker(workers, first_name, second_name, patronymic);
      if (id === -1) {
        props.alertCreator("Рабочий не найден");
      } else {
        props.deleteWorker(token, id, user_id, history, url, props.year, props.month);
        setOpen(false);
      }
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" style={{ margin: "0px 10px 0px 10px" }} onClick={handleClickOpen}>
        Удалить сотрудника
      </Button>
      <Dialog open={open} onClose={handleCloseOnCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Удаление сотрудника</DialogTitle>
        <DialogContent className={style.dialog}>
          {props.textAlert !== "" ? <Alert text={props.textAlert} /> : <></>}
          <Input className={style.input} type="text" placeholder="Введите фамилию" id="second_name" required={true} />
          <Input className={style.input} type="text" placeholder="Введите имя" id="first_name" required={true} />
          <Input className={style.input} type="text" placeholder="Введите отчество" id="patronymic" required={true} />
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
                props.user_id,
                props.history,
                props.url,
                props.workers
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

export default DeleteWorkerDialog;
