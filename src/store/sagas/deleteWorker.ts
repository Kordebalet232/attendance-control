import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import User_tableAC from "../actionCreators/user_tableAC";
import api_address from "./apiAddress";

async function deleteWorker(id: number, token: string) {
  return await Axios.delete(api_address + `/worker/${id}/`, {
    headers: {
      Authorization: "Token " + token,
    },
  })
    .then((response) => {
      if (response.status === 204) {
        return true;
      } else {
        if (response.status === 400) return "error";
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
}

function* workerDeleteWorker(action: Action) {
  yield call(deleteWorker, action.worker_id, action.token);
  yield put(
    User_tableAC.getUser_Table(action.token, action.user_id, action.history, action.url, action.year, action.month)
  );
}

function* watchDeleteWorker() {
  yield takeEvery(ACTION.DELETE_WORKER, workerDeleteWorker);
}

export default watchDeleteWorker;
