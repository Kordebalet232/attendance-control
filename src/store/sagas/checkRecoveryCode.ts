import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import switchPage from "../../helpers/PageSwitcher";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import tokenAC from "../actionCreators/tokenAC";
import api_address from "./apiAddress";

async function checkCode(code: string) {
  return await Axios.post(api_address + "/check_code", {
    code: code,
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

function* workerCheckRecoveryCode(action: Action) {
  const data = yield call(checkCode, action.code);

  if (data !== undefined) {
    yield put(tokenAC.setTokenLog(data.token, data.id));
    yield call(switchPage, action.history, action.url);
  }
}

function* watchCheckRecoveryCode() {
  yield takeEvery(ACTION.CHECK_RECOVERY_CODE, workerCheckRecoveryCode);
}

export default watchCheckRecoveryCode;
