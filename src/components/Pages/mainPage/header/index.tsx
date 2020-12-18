import Picker from "./DatePicker";
import React from "react";
import style from "./style.module.css";
import AddWorkerDialog from "../modals/addWorkerModal";
import DeleteWorkerDialog from "../modals/deleteWorkerModal";
import GiveVacationDialog from "../modals/GiveVacationModal";
import NotificationsDialog from "../modals/notificationsModal";
import { notification, worker } from "../../../../types/user";

type Props = {
  fromDateStr: string;
  toDateStr: string;
  token: string;
  history: any;
  user_id: number;
  workers: worker[];
  textAlert: string;
  year: number;
  month: number;
  notifications: notification[];
  createVacation: (token: string, worker_id: number, start_date: Date, end_date: Date) => void;
  alertCreator: (text: string) => void;
  setMonth: (date: Date, token: string, user_id: string, history: any, url: string) => void;
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
  deleteWorker: (
    token: string,
    worker_id: number,
    user_id: number,
    history: any,
    url: string,
    year: number,
    month: number
  ) => void;
  deleteNotification: (
    token: string,
    id: number,
    isGap: boolean,
    user_id: number,
    history: any,
    url: string,
    year: number,
    month: number,
    worker_id?: number,
    reason?: string,
    document?: string,
    gap_id?: number
  ) => void;
};

const Header = (props: Props) => {
  return (
    <div className={style.header}>
      <NotificationsDialog
        workers={props.workers}
        notifications={props.notifications}
        deleteNotification={props.deleteNotification}
        token={props.token}
        user_id={props.user_id}
        history={props.history}
        year={props.year}
        month={props.month}
      />
      <DeleteWorkerDialog
        deleteWorker={props.deleteWorker}
        token={props.token}
        history={props.history}
        url="/main"
        user_id={props.user_id}
        workers={props.workers}
        textAlert={props.textAlert}
        alertCreator={props.alertCreator}
        year={props.year}
        month={props.month}
      />
      <AddWorkerDialog
        token={props.token}
        user_id={props.user_id}
        history={props.history}
        url="/main"
        alertCreator={props.alertCreator}
        CreateWorker={props.CreateWorker}
        textAlert={props.textAlert}
        year={props.year}
        month={props.month}
      />
      <GiveVacationDialog
        createVacation={props.createVacation}
        token={props.token}
        workers={props.workers}
        textAlert={props.textAlert}
        alertCreator={props.alertCreator}
      />
      <Picker
        isDisabled={false}
        className={style.date_picker}
        fromDateStr={props.fromDateStr}
        toDateStr={props.toDateStr}
        setMonth={props.setMonth}
        history={props.history}
        user_id={props.user_id}
        token={props.token}
      />
    </div>
  );
};

export default Header;
