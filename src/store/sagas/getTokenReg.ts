import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import switchPage from "../../helpers/PageSwitcher";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import tokenAC from "../actionCreators/tokenAC";
import api_address from "./apiAddress";

async function getTokenReg(email: string, password: string, first_name: string, last_name: string, department: string) {
  return await Axios.post(api_address + "/registration/", {
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    table_name: department,
  })
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetTokenReg(action: Action) {
  const data = yield call(
    getTokenReg,
    action.email,
    action.password,
    action.first_name,
    action.last_name,
    action.department
  );

  if (data !== undefined) {
    yield put(tokenAC.setTokenReg(data.token, data.id));
    yield call(switchPage, action.history, action.url);
  }
}

function* watchGetTokenReg() {
  yield takeEvery(ACTION.GET_TOKEN_REG, workerGetTokenReg);
}

export default watchGetTokenReg;
