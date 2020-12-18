import Axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import api_address from "./apiAddress";

async function createVacation(token: string, start_date: Date, end_date: Date, worker_id: number) {
  return await Axios.post(
    api_address + "/vacation/",
    {
      start_date: start_date,
      end_date: end_date,
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
