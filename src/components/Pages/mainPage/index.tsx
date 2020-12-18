import React from "react";
import { notification, worker } from "../../../types/user";
import Footer from "./footer";
import Header from "./header";
import style from "./style.module.css";
import Table from "./table";

type Props = {
  table_name: string;
  workers: worker[];
  fromDateStr: string;
  toDateStr: string;
  days: number[];
  token: string;
  user_id: number;
  history: any;
  textAlert: string;
  isAuthed: boolean;
  year: number;
  month: number;
  notifications: notification[];
  alertCreator: (text: string) => void;
  setMonth: (date: Date, token: string, user_id: string, history: any, url: string) => void;
  createVacation: (token: string, worker_id: number, start_date: Date, end_date: Date) => void;
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

const MainPage = (props: Props) => {
  const componentRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
  return (
    <div className={style.mainPage}>
      <Header
        fromDateStr={props.fromDateStr}
        toDateStr={props.toDateStr}
        setMonth={props.setMonth}
        token={props.token}
        user_id={props.user_id}
        history={props.history}
        CreateWorker={props.CreateWorker}
        deleteWorker={props.deleteWorker}
        workers={props.workers}
        textAlert={props.textAlert}
        alertCreator={props.alertCreator}
        createVacation={props.createVacation}
        year={props.year}
        month={props.month}
        notifications={props.notifications}
        deleteNotification={props.deleteNotification}
      />
      <Table table_name={props.table_name} workers={props.workers} days={props.days} componentRef={componentRef} />
      <Footer componentRef={componentRef} />
    </div>
  );
};

export default MainPage;
