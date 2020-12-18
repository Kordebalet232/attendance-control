import { CombinedState } from "redux";
import { connect } from "react-redux";
import tokenAC from "../../../store/actionCreators/tokenAC";
import Action from "../../../types/Action";
import regPage from ".";
import Token from "../../../types/token";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getTokenReg: (
      email: string,
      password: string,
      first_name: string,
      last_name: string,
      department: string,
      history: any,
      url_to_push: string
    ) => {
      dispatch(tokenAC.getTokenReg(email, password, first_name, last_name, department, history, url_to_push));
    },
  };
}

function mapStateToProps(
  state: CombinedState<{
    token: Token;
  }>
) {
  return {
    isAuthed: state.token.didGet,
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(regPage);

export default AddressContainer;
