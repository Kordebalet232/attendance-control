import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import Header from "../types/header";
import MainPageT from "../types/pages/mainPage";
import Token from "../types/token";
import Alert from "../types/alert";

import token from "./reducers/token";
import user_table from "./reducers/user_table";
import watchCheckRecoveryCode from "./sagas/checkRecoveryCode";
import header from "./reducers/header";
import alert from "./reducers/alert";

import watchGetTokenLog from "./sagas/getTokenLog";
import watchGetTokenReg from "./sagas/getTokenReg";
import watchGetUserTable from "./sagas/getUserTable";
import watchGetRecoveryCode from "./sagas/sendMail";
import watchSetNewPass from "./sagas/setNewPass";
import watchCreateNewWorker from "./sagas/createNewWorker";
import watchDeleteWorker from "./sagas/deleteWorker";
import watchDeleteNotification from "./sagas/deleteNotification";
import watchCreateVacation from "./sagas/createVacation";
import watchUpdateGap from "./sagas/updateGap";

const reducers = combineReducers({
  token: token,
  mainPage: user_table,
  header: header,
  alert: alert,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    header: Header;
    token: Token;
    mainPage: MainPageT;
    alert: Alert;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchGetTokenLog);
saga.run(watchGetTokenReg);
saga.run(watchGetUserTable);
saga.run(watchGetRecoveryCode);
saga.run(watchCheckRecoveryCode);
saga.run(watchSetNewPass);
saga.run(watchCreateNewWorker);
saga.run(watchDeleteWorker);
saga.run(watchDeleteNotification);
saga.run(watchCreateVacation);
saga.run(watchUpdateGap);
export default store;
