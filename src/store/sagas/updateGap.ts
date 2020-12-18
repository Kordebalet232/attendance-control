import Axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import api_address from "./apiAddress";

async function updateGap(id: number, token: string, reason: number, worker_id: number, document: string) {
  console.log(worker_id);
  return await Axios.put(
    api_address + `/gap/${id}/`,
    {
      reason: reason,
      //document: document,
      worker: worker_id,
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

function* workerUpdateGap(action: Action) {
  yield call(updateGap, action.gap_id, action.token, action.reason, action.worker_id, action.document);
}

function* watchUpdateGap() {
  yield takeEvery(ACTION.UPDATE_GAP, workerUpdateGap);
}

export default watchUpdateGap;
