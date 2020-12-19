import { CombinedState } from "redux";
import { connect } from "react-redux";
import tokenAC from "../../../store/actionCreators/tokenAC";
import Action from "../../../types/Action";
import regPage from ".";
import Token from "../../../types/token";
import alertAC from "../../../store/actionCreators/alertAC";
import Alert from "../../../types/alert";

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
    alertCreator: (text: string) => {
      dispatch(alertAC.showAlert(text));
      setTimeout(() => {
        dispatch(alertAC.hideAlert());
      }, 10000);
    },
  };
}

function mapStateToProps(
  state: CombinedState<{
    token: Token;
    alert: Alert;
  }>
) {
  return {
    isAuthed: state.token.didGet,
    textAlert: state.alert.text,
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(regPage);

export default AddressContainer;
