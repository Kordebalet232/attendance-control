import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import calculateHours from "../../helpers/calculate_hours";
import checkGaps from "../../helpers/check_gaps";
import switchPage from "../../helpers/PageSwitcher";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import User_tableAC from "../actionCreators/user_tableAC";
import api_address from "./apiAddress";

async function GetUserTable(token: string, id: string, year: number, month: number) {
  return await Axios.get(api_address + `/users/${id}/?year=${year}&month=${month + 1}`, {
    headers: {
      Authorization: "Token " + token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        if (response.status === 400) return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerUserTable(action: Action) {
  const data = yield call(GetUserTable, action.token, action.id, action.year, action.month);
  console.log(data);
  if (data.workers[0] !== undefined) {
    calculateHours(data.workers);
    checkGaps(data.workers);
  }
  if (data !== undefined) {
    yield put(User_tableAC.setUser_Table(data));
    yield call(switchPage, action.history, action.url);
  }
}

function* watchGetUserTable() {
  yield takeEvery(ACTION.GET_USER_TABLE, workerUserTable);
}

export default watchGetUserTable;
