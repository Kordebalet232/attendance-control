import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import User_tableAC from "../actionCreators/user_tableAC";
import api_address from "./apiAddress";

async function setNewPass(new_pass: string, token: string) {
  console.log(new_pass + token);
  console.log("Token " + token);
  return await Axios.put(
    api_address + "/reset_password/",
    {
      password: new_pass,
    },
    {
      headers: {
        Authorization: "Token " + token,
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
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

function* workerSetNewPass(action: Action) {
  const data = yield call(setNewPass, action.new_pass, action.token);
  console.log(data);
  if (data !== undefined) {
    yield put(
      User_tableAC.getUser_Table(action.token, action.id, action.history, action.url, action.year, action.month)
    );
  }
}

function* watchSetNewPass() {
  yield takeEvery(ACTION.SET_NEW_PASS, workerSetNewPass);
}

export default watchSetNewPass;
