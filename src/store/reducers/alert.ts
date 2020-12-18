import Action from "../../types/Action";
import Alert from "../../types/alert";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/alert";

function alert(state: Alert = initialState, action: Action): Alert {
  switch (action.type) {
    case ACTION.HIDE_ALERT:
      return {
        ...state,
        text: "",
      };
    case ACTION.SHOW_ALERT:
      console.log(action.text);
      return {
        ...state,
        text: action.text,
      };
  }
  return state;
}

export default alert;
