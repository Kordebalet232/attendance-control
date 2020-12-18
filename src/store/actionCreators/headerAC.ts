import Action from "../../types/Action";
import ACTION from "./ACTION";

function setMonth(date: Date): Action {
  return {
    type: ACTION.SET_MONTH,
    payload: date,
  };
}

const headerAC = {
  setMonth: setMonth,
};

export default headerAC;
