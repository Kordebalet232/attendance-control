import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import User_tableAC from "../actionCreators/user_tableAC";
import api_address from "./apiAddress";

async function createWorker(
  token: string,
  first_name: string,
  second_name: string,
  patronymic: string,
  hour_norm: number,
  vacation_days: number,
  start_day: string,
  end_day: string
) {
  return await Axios.post(
    api_address + "/worker/",
    {
      first_name: first_name,
      second_name: second_name,
      patronymic: patronymic,
      hour_norm: hour_norm,
      vacation_days: vacation_days,
      start_day: start_day,
      end_day: end_day,
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

function* workerCreateNewWorker(action: Action) {
  const data = yield call(
    createWorker,
    action.token,
    action.first_name,
    action.second_name,
    action.patronymic,
    action.hour_norm,
    action.vacation_days,
    action.start_day,
    action.end_day
  );
  console.log(data);
  yield put(
    User_tableAC.getUser_Table(action.token, action.user_id, action.history, action.url, action.year, action.month)
  );
}

function* watchCreateNewWorker() {
  yield takeEvery(ACTION.CREATE_NEW_WORKER, workerCreateNewWorker);
}

export default watchCreateNewWorker;
