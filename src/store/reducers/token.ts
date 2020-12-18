import Action from "../../types/Action";
import Token from "../../types/token";
import ACTION from "../actionCreators/ACTION";

import initialState from "../states/token";

function token(state: Token = initialState, action: Action): Token {
  switch (action.type) {
    case ACTION.SET_TOKEN_LOG:
      return {
        ...state,
        didGet: true,
        token: action.token,
        id: action.id,
      };
    case ACTION.SET_TOKEN_REG:
      return {
        ...state,
        didGet: true,
        token: action.token,
        id: action.id,
      };
  }

  return state;
}

export default token;
