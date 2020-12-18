import Axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import switchPage from "../../helpers/PageSwitcher";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import api_address from "./apiAddress";

async function sendMail(email: string) {
  return await Axios.post(api_address + "/send_code/", {
    email: email,
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

function* workerRecoverPass(action: Action) {
  const data = yield call(sendMail, action.email);
  if (data !== undefined) {
    console.log(action.url_to_push + action.history);
    yield call(switchPage, action.history, action.url);
  }
}

function* watchSendRecoveryCode() {
  yield takeEvery(ACTION.SEND_RECOVERY_CODE, workerRecoverPass);
}

export default watchSendRecoveryCode;
