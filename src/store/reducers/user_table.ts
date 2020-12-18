import Action from "../../types/Action";
import MainPage from "../../types/pages/mainPage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/user_table";

function user_table(state: MainPage = initialState, action: Action): MainPage {
  switch (action.type) {
    case ACTION.SET_USER_TABLE:
      return {
        ...state,
        didGet: true,
        user: action.user_table,
      };
  }
  return state;
}

export default user_table;
