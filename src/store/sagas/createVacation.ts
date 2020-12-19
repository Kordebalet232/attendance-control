import Axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import api_address from "./apiAddress";

async function createVacation(token: string, start_date: Date, end_date: Date, worker_id: number) {
  console.log(
    token +
      " " +
      start_date.getFullYear() +
      "-" +
      (start_date.getMonth() + 1) +
      "-" +
      start_date.getDate() +
      " " +
      end_date.toString() +
      " " +
      worker_id
  );
  return await Axios.post(
    api_address + "/vacation/",
    {
      start_date: start_date.getFullYear() + "-" + (start_date.getMonth() + 1) + "-" + start_date.getDate(),
      end_date: end_date.getFullYear() + "-" + (end_date.getMonth() + 1) + "-" + end_date.getDate(),
      worker: worker_id,
    },
    {
      headers: {
        Authorization: "Token " + token,
      },
    }
  )
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        if (response.status === 400) return "error";
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
}

function* workerCreateVacation(action: Action) {
  yield call(createVacation, action.token, action.start_date, action.end_date, action.worker_id);
}

function* watchCreateVacation() {
  yield takeEvery(ACTION.GIVE_VACATION, workerCreateVacation);
}

export default watchCreateVacation;
