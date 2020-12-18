import Action from "../../types/Action";
import Token from "../../types/token";
import ACTION from "./ACTION";

function getTokenLog(
  email: string,
  password: string,
  history: any,
  url_to_push: string,
  year: number,
  month: number
): Action {
  return {
    type: ACTION.GET_TOKEN_LOG,
    email: email,
    password: password,
    history: history,
    url: url_to_push,
    year: year,
    month: month,
  };
}

function getTokenReg(
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  department: string,
  history: any,
  url_to_push: string
): Action {
  return {
    type: ACTION.GET_TOKEN_REG,
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    department: department,
    history: history,
    url: url_to_push,
  };
}

function setTokenLog(token: Token, id: number): Action {
  return {
    type: ACTION.SET_TOKEN_LOG,
    token: token,
    id: id,
  };
}

function setTokenReg(token: Token, id: number): Action {
  return {
    type: ACTION.SET_TOKEN_REG,
    token: token,
    id: id,
  };
}

function recoverPass(email: string, history: any, url_to_push: string): Action {
  return {
    type: ACTION.SEND_RECOVERY_CODE,
    email: email,
    history: history,
    url: url_to_push,
  };
}

function checkRecoveryCode(code: string, history: any, url_to_push: string): Action {
  return {
    type: ACTION.CHECK_RECOVERY_CODE,
    code: code,
    history: history,
    url: url_to_push,
  };
}

const tokenAC = {
  getTokenLog: getTokenLog,
  setTokenLog: setTokenLog,
  getTokenReg: getTokenReg,
  setTokenReg: setTokenReg,
  recoverPass: recoverPass,
  checkRecoveryCode: checkRecoveryCode,
};

export default tokenAC;
