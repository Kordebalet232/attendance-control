import Action from "../../types/Action";
import { User } from "../../types/user";
import ACTION from "./ACTION";

function getUser_Table(
  token: string,
  id: string,
  history: any,
  url_to_push: string,
  year: number,
  month: number
): Action {
  return {
    type: ACTION.GET_USER_TABLE,
    token: token,
    id: id,
    history: history,
    url: url_to_push,
    year: year,
    month: month,
  };
}

function setUser_Table(user_table: User): Action {
  return {
    type: ACTION.SET_USER_TABLE,
    user_table: user_table,
  };
}

function setNewPass(
  new_pass: string,
  history: any,
  url_to_push: string,
  token: string,
  id: number,
  year: number,
  month: number
): Action {
  return {
    type: ACTION.SET_NEW_PASS,
    new_pass: new_pass,
    history: history,
    url: url_to_push,
    token: token,
    id: id,
    year: year,
    month: month,
  };
}

function CreateNewWorker(
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
): Action {
  let norm = 0;
  if (hour_norm === "36") {
    norm = 1;
  } else {
    norm = 2;
  }
  return {
    type: ACTION.CREATE_NEW_WORKER,
    token: token,
    first_name: first_name,
    second_name: second_name,
    patronymic: patronymic,
    hour_norm: norm,
    vacation_days: vacation_days,
    user_id: user_id,
    history: history,
    url: url,
    start_day: start_day,
    end_day: end_day,
    year: year,
    month: month,
  };
}

function DeleteWorker(
  token: string,
  worker_id: number,
  user_id: number,
  history: any,
  url: string,
  year: number,
  month: number
): Action {
  return {
    type: ACTION.DELETE_WORKER,
    token: token,
    worker_id: worker_id,
    user_id: user_id,
    history: history,
    url: url,
    year: year,
    month: month,
  };
}

function CreateVacation(token: string, start_day: Date, end_date: Date, worker_id: number): Action {
  return {
    type: ACTION.GIVE_VACATION,
    token: token,
    start_day: start_day,
    end_date: end_date,
    worker_id: worker_id,
  };
}

function updateGap(token: string, reason: number, document: string, worker_id: number, gap_id: number) {
  return {
    type: ACTION.UPDATE_GAP,
    token: token,
    reason: reason,
    document: document,
    worker_id: worker_id,
    gap_id: gap_id,
  };
}

function deleteNotification(
  token: string,
  id: number,
  isGap: boolean,
  user_id: number,
  history: any,
  url: string,
  year: number,
  month: number,
  worker_id?: number,
  reason?: string | number,
  document?: string,
  gap_id?: number
) {
  if (document === undefined) {
    document = "";
  }
  if (reason === "1") {
    reason = 1;
  }
  if (reason === "2") {
    reason = 2;
  }
  if (reason === "3") {
    reason = 3;
  }
  if (reason === "4") {
    reason = 4;
  }
  return {
    type: ACTION.DELETE_NOTIFICATION,
    token: token,
    id: id,
    isGap: isGap,
    reason: reason,
    document: document,
    gap_id: gap_id,
    user_id: user_id,
    history: history,
    worker_id: worker_id,
    url: url,
    year: year,
    month: month,
  };
}

const User_tableAC = {
  getUser_Table: getUser_Table,
  setUser_Table: setUser_Table,
  setNewPass: setNewPass,
  CreateNewWorker: CreateNewWorker,
  DeleteWorker: DeleteWorker,
  CreateVacation: CreateVacation,
  updateGap: updateGap,
  deleteNotification: deleteNotification,
};

export default User_tableAC;
