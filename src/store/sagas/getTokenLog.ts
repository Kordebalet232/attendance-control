import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import tokenAC from "../actionCreators/tokenAC";
import User_tableAC from "../actionCreators/user_tableAC";
import api_address from "./apiAddress";

async function getTokenLog(email: string, password: string) {
  return await Axios.post(api_address + "/token/login", {
    email: email,
    password: password,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        alert("Неверно введены данные!");
        if (response.status === 400) return "error";
      }
    })
    .catch((err) => {
      alert("Введены неверные данные");
    });
}

function* workerGetToken(action: Action) {
  const data = yield call(getTokenLog, action.email, action.password);

  if (data !== undefined) {
    yield put(tokenAC.setTokenLog(data.key, data.user.id));
    yield put(
      User_tableAC.getUser_Table(data.key, data.user.id, action.history, action.url, action.year, action.month)
    );
  }
}

function* watchGetTokenLog() {
  yield takeEvery(ACTION.GET_TOKEN_LOG, workerGetToken);
}

export default watchGetTokenLog;
