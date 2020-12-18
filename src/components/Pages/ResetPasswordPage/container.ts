import { CombinedState } from "redux";
import { connect } from "react-redux";
import Action from "../../../types/Action";
import logPage from ".";
import Token from "../../../types/token";
import User_tableAC from "../../../store/actionCreators/user_tableAC";
import Header from "../../../types/header";
import alertAC from "../../../store/actionCreators/alertAC";
import Alert from "../../../types/alert";

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setNewPass: (
      new_pass: string,
      history: any,
      url_to_push: string,
      token: string,
      id: number,
      year: number,
      month: number
    ) => {
      dispatch(User_tableAC.setNewPass(new_pass, history, url_to_push, token, id, year, month));
    },
    alertCreator: (text: string) => {
      dispatch(alertAC.showAlert(text));
      setTimeout(() => {
        dispatch(alertAC.hideAlert());
      }, 3000);
    },
  };
}

function mapStateToProps(
  state: CombinedState<{
    token: Token;
    header: Header;
    alert: Alert;
  }>
) {
  return {
    isAuthed: state.token.didGet,
    year: state.header.year,
    month: state.header.month,
    token: state.token.token,
    id: state.token.id,
    textAlert: state.alert.text,
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(logPage);

export default AddressContainer;
